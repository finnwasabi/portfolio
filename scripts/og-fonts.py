# Rebuilds the static fonts in src/og/fonts from the Fontsource files the site
# itself serves. The link-preview renderer (src/og/render.ts) needs plain TTF at a
# fixed weight; fontconfig cannot read the variable WOFF2 files directly.
#
#   pip install fonttools brotli
#   python3 scripts/og-fonts.py
from fontTools import subset
from fontTools.ttLib import TTFont
from fontTools.varLib import instancer

SOURCE = "node_modules/@fontsource-variable/"
JOBS = [
    ("unbounded/files/unbounded-latin-wght-normal.woff2", 800, "Unbounded-ExtraBold.ttf"),
    ("inter/files/inter-latin-wght-normal.woff2", 400, "Inter-Regular.ttf"),
    ("jetbrains-mono/files/jetbrains-mono-latin-wght-normal.woff2", 500, "JetBrainsMono-Medium.ttf"),
]
# ASCII, Latin-1, curly quotes, ellipsis and bullet: enough for titles and labels
UNICODES = list(range(0x20, 0x7F)) + list(range(0xA0, 0x100)) + [0x2018, 0x2019, 0x201C, 0x201D, 0x2026, 0x2022]

for src, weight, out in JOBS:
    font = TTFont(SOURCE + src)
    font.flavor = None
    font = instancer.instantiateVariableFont(font, {"wght": weight})
    options = subset.Options()
    options.layout_features = ["kern", "liga", "calt"]
    options.name_IDs = ["*"]
    options.notdef_outline = True
    subsetter = subset.Subsetter(options)
    subsetter.populate(unicodes=UNICODES)
    subsetter.subset(font)
    font.save("src/og/fonts/" + out)
    print("wrote", out)
