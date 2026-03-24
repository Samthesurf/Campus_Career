from PIL import Image, ImageDraw, ImageFilter

W, H = 1200, 630

# --- Gradient background (deep purple top-left -> dark navy bottom-right) ---
bg = Image.new("RGBA", (W, H))
pixels = bg.load()

start = (37, 33, 54)  # #252136 dark purple
end = (80, 142, 180)  # #508EB4 steel blue

for y in range(H):
    for x in range(W):
        t = (x / (W - 1) + y / (H - 1)) / 2
        r = int(start[0] + (end[0] - start[0]) * t)
        g = int(start[1] + (end[1] - start[1]) * t)
        b = int(start[2] + (end[2] - start[2]) * t)
        pixels[x, y] = (r, g, b, 255)

# --- Soft decorative glowing circles ---
glow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
draw = ImageDraw.Draw(glow)

# Top-right — slate blue
draw.ellipse([860, -80, 1280, 340], fill=(79, 115, 200, 55))
# Bottom-left — vivid purple
draw.ellipse([-100, 330, 440, 780], fill=(140, 60, 180, 50))
# Centre-right subtle accent
draw.ellipse([750, 200, 1050, 500], fill=(100, 80, 200, 30))

glow = glow.filter(ImageFilter.GaussianBlur(radius=80))
bg = Image.alpha_composite(bg, glow)

# --- Load the C2C wordmark (FRONT BLACK = gold/cream on transparent) ---
logo_src = Image.open("assets/FRONT BLACK.png").convert("RGBA")

# Scale to 780px wide, preserve aspect ratio
logo_w = 780
logo_h = int(logo_src.height * logo_w / logo_src.width)
logo = logo_src.resize((logo_w, logo_h), Image.Resampling.LANCZOS)

# Centre on canvas
lx = (W - logo_w) // 2
ly = (H - logo_h) // 2

bg.paste(logo, (lx, ly), logo)

# --- Save ---
out = bg.convert("RGB")
out.save("public/og-image.png", "PNG", optimize=True)
print(f"Done: public/og-image.png  ({W}x{H})  logo: {logo_w}x{logo_h} at ({lx},{ly})")
