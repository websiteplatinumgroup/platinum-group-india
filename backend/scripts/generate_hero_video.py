"""Generate the 30s Platinum Greens Opulence hero lifestyle video via Sora 2.
3 clips (12s + 12s + 8s) stitched with crossfades; final 1s crossfaded with
the opening 1s so the video loops seamlessly. Runs long — launch in background.
"""
import os
import sys
import subprocess
from pathlib import Path
from dotenv import load_dotenv

load_dotenv("/app/backend/.env")
sys.path.insert(0, "/app/backend")

from emergentintegrations.llm.openai.video_generation import OpenAIVideoGeneration
import imageio_ffmpeg

FFMPEG = imageio_ffmpeg.get_ffmpeg_exe()
WORK = Path("/app/backend/tmp_video")
WORK.mkdir(exist_ok=True)
OUT = Path("/app/frontend/public/brand/hero-loop.mp4")

CHARACTERS = (
    "The same four family members appear in every shot: a sophisticated Indian mother, "
    "34 years old, shoulder-length dark brown hair; a sophisticated Indian father, 36 years old, "
    "short neat black hair, light trimmed beard; a cheerful 8-year-old daughter with two braids; "
    "a playful 6-year-old son with short curly hair. Identical faces, hairstyles, skin tones, "
    "ages and body proportions in every shot."
)
STYLE = (
    "Photorealistic high-end luxury residential lifestyle commercial. Warm soft natural daylight, "
    "healthy skin tones, rich realistic greenery, elegant neutral contemporary apartment architecture "
    "softly blurred in background, smooth gimbal tracking, shallow depth of field close-ups, "
    "cinematic motion blur, premium cinematic colour grading, not oversaturated. "
    "Absolutely no text, no logos, no signage, no branding anywhere in the video. "
    "Genuine spontaneous expressions, understated joyful family interaction."
)

CLIPS = [
    (
        "clip_a.mp4", 12,
        f"Cinematic 12-second shot. {CHARACTERS} The family walks together through a lush landscaped "
        "garden with mature trees and beautiful walking paths inside an upscale generic apartment "
        "community; the children move slightly ahead while the parents walk together behind them, "
        "camera tracking smoothly from behind and slightly to the side in warm morning light. "
        "The movement flows naturally into the daughter on a premium playground swing, the father "
        "gently pushing her, mother and son nearby laughing; one brief close-up of the daughter's "
        f"happy face. Premium casual clothing. {STYLE}",
    ),
    (
        "clip_b.mp4", 12,
        f"Cinematic 12-second shot. {CHARACTERS} The family plays a light badminton game on a "
        "landscaped recreational lawn in coordinated elegant activewear, children participating "
        "playfully, one brief slow-motion moment of the daughter hitting the shuttlecock. This flows "
        "into the children cycling along a safe internal landscaped pathway while parents walk "
        "alongside, smooth lateral tracking with trees creating foreground depth. Then a beautiful "
        "contemporary swimming pool where the same family, in tasteful swimwear, splashes and plays; "
        f"one water-level angle and a close-up of genuine laughter. {STYLE}",
    ),
    (
        "clip_c.mp4", 8,
        f"Cinematic 8-second shot. {CHARACTERS} Inside an elegant modern clubhouse games room in "
        "relaxed smart-casual clothing: the father and son play table tennis while the mother and "
        "daughter enjoy foosball nearby, playful laughter, spontaneous reactions. This flows into an "
        "outdoor landscaped courtyard where the children run toward their parents who welcome them "
        "with laughter and hand-holding, then the whole family begins walking together through "
        "landscaped greenery, children slightly ahead, parents following — same direction, camera "
        f"height, framing and warm morning light as a family garden walk. {STYLE}",
    ),
]


def gen(name, duration, prompt):
    out = WORK / name
    if out.exists() and out.stat().st_size > 100000:
        print(f"[skip] {name} exists", flush=True)
        return out
    print(f"[gen] {name} ({duration}s)...", flush=True)
    vg = OpenAIVideoGeneration(api_key=os.environ["EMERGENT_LLM_KEY"])
    data = vg.text_to_video(
        prompt=prompt, model="sora-2", size="1280x720",
        duration=duration, max_wait_time=900,
    )
    if not data:
        raise RuntimeError(f"generation failed: {name}")
    vg.save_video(data, str(out))
    print(f"[done] {name} -> {out.stat().st_size} bytes", flush=True)
    return out


def stitch(paths):
    # pairwise xfade (0.5s) then loop-blend last 1s into first 1s
    a, b, c = [str(p) for p in paths]
    tmp = WORK / "stitched.mp4"
    cmd1 = [
        FFMPEG, "-y", "-i", a, "-i", b, "-i", c, "-filter_complex",
        "[0:v][1:v]xfade=transition=fade:duration=0.5:offset=11.5[v1];"
        "[v1][2:v]xfade=transition=fade:duration=0.5:offset=23[v]",
        "-map", "[v]", "-an", "-pix_fmt", "yuv420p", "-r", "24", str(tmp),
    ]
    print("[stitch] crossfading clips", flush=True)
    subprocess.run(cmd1, check=True, capture_output=True)

    # stitched ≈ 31s. body 0..30 + tail(29.5..30.5->0..1) xfade head(0..1) => loop seam
    cmd2 = [
        FFMPEG, "-y", "-i", str(tmp), "-filter_complex",
        "[0:v]trim=start=0:end=30,setpts=PTS-STARTPTS[body];"
        "[0:v]trim=start=29:end=30,setpts=PTS-STARTPTS[tail];"
        "[0:v]trim=start=0:end=1,setpts=PTS-STARTPTS[head];"
        "[tail][head]xfade=transition=fade:duration=1:offset=0[blend];"
        "[body][blend]concat=n=2:v=1:a=0[out]",
        "-map", "[out]", "-an", "-pix_fmt", "yuv420p", "-r", "24",
        "-c:v", "libx264", "-crf", "23", "-preset", "slow",
        "-movflags", "+faststart", str(OUT),
    ]
    print("[stitch] loop blend + encode", flush=True)
    subprocess.run(cmd2, check=True, capture_output=True)
    print(f"[done] final -> {OUT} ({OUT.stat().st_size} bytes)", flush=True)


if __name__ == "__main__":
    paths = [gen(n, d, p) for n, d, p in CLIPS]
    stitch(paths)
    print("ALL DONE", flush=True)
