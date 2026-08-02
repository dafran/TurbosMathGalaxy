#!/bin/bash
# Generate all store-ready icon and splash assets for Math Galaxy
# Requires ImageMagick 7 with rsvg delegate

set -e

ICON_SVG="icon.svg"
BG_COLOR="#2a1150"

echo "=== Math Galaxy — Store Asset Generator ==="

# ────────────────────────────────────────────
# Helper: render SVG → PNG at given size
# ────────────────────────────────────────────
svg_to_png() {
  local size="$1"
  local out="$2"
  magick -background "$BG_COLOR" -size "${size}x${size}" "$ICON_SVG" \
    -resize "${size}x${size}" \
    -flatten \
    "$out"
}

# ────────────────────────────────────────────
# Helper: render SVG → round PNG at given size
# ────────────────────────────────────────────
svg_to_round_png() {
  local size="$1"
  local out="$2"
  local half=$(( size / 2 ))
  magick -background "$BG_COLOR" -size "${size}x${size}" "$ICON_SVG" \
    -resize "${size}x${size}" \
    -flatten \
    \( +clone -alpha extract \
       -draw "fill white circle ${half},${half} ${half},0" \
       -negate \
       -negate \) \
    -alpha off -compose CopyOpacity -composite \
    -flatten "$out"
}

# ────────────────────────────────────────────
# 1. Android mipmap icons
# ────────────────────────────────────────────
echo ""
echo "→ Android mipmap icons..."

declare -A MIPMAP_SIZES=(
  ["mipmap-mdpi"]=48
  ["mipmap-hdpi"]=72
  ["mipmap-xhdpi"]=96
  ["mipmap-xxhdpi"]=144
  ["mipmap-xxxhdpi"]=192
)

MIPMAP_FG_SIZES=(
  ["mipmap-mdpi"]=108
  ["mipmap-hdpi"]=162
  ["mipmap-xhdpi"]=216
  ["mipmap-xxhdpi"]=324
  ["mipmap-xxxhdpi"]=432
)

for density in "${!MIPMAP_SIZES[@]}"; do
  SIZE=${MIPMAP_SIZES[$density]}
  DIR="android/app/src/main/res/$density"
  mkdir -p "$DIR"

  # ic_launcher (standard square)
  svg_to_png "$SIZE" "$DIR/ic_launcher.png"

  # ic_launcher_round (circular)
  svg_to_round_png "$SIZE" "$DIR/ic_launcher_round.png"

  echo "   $density: ${SIZE}px ✓"
done

# Foreground layer at 108dp base sizes (for adaptive icons)
declare -A MIPMAP_FG=(
  ["mipmap-mdpi"]=108
  ["mipmap-hdpi"]=162
  ["mipmap-xhdpi"]=216
  ["mipmap-xxhdpi"]=324
  ["mipmap-xxxhdpi"]=432
)
for density in "${!MIPMAP_FG[@]}"; do
  SIZE=${MIPMAP_FG[$density]}
  DIR="android/app/src/main/res/$density"
  mkdir -p "$DIR"
  svg_to_png "$SIZE" "$DIR/ic_launcher_foreground.png"
  echo "   $density foreground: ${SIZE}px ✓"
done

# ────────────────────────────────────────────
# 2. iOS AppIcon (1024×1024, no transparency)
# ────────────────────────────────────────────
echo ""
echo "→ iOS AppIcon 1024×1024..."
IOS_ICON_DIR="ios/App/App/Assets.xcassets/AppIcon.appiconset"
mkdir -p "$IOS_ICON_DIR"
svg_to_png 1024 "$IOS_ICON_DIR/AppIcon-512@2x.png"
echo "   iOS 1024×1024 ✓"

# ────────────────────────────────────────────
# 3. Android splash screens
# ────────────────────────────────────────────
echo ""
echo "→ Android splash screens..."

make_android_splash() {
  local density="$1"
  local w="$2"
  local h="$3"
  local out_dir="android/app/src/main/res/drawable-port-$density"
  mkdir -p "$out_dir"

  # Background + centered icon
  local icon_size=$(( h / 4 ))
  magick -size "${w}x${h}" gradient:"#3d1878-#2a1150" \
    \( "$ICON_SVG" -background none -resize "${icon_size}x${icon_size}" \) \
    -gravity Center -composite \
    "$out_dir/splash.png"
  echo "   drawable-port-$density: ${w}×${h}px ✓"
}

make_android_splash_land() {
  local density="$1"
  local w="$2"
  local h="$3"
  local out_dir="android/app/src/main/res/drawable-land-$density"
  mkdir -p "$out_dir"
  local icon_size=$(( w / 4 ))
  magick -size "${w}x${h}" gradient:"#3d1878-#2a1150" \
    \( "$ICON_SVG" -background none -resize "${icon_size}x${icon_size}" \) \
    -gravity Center -composite \
    "$out_dir/splash.png"
  echo "   drawable-land-$density: ${w}×${h}px ✓"
}

# drawable (default)
magick -size "480x800" gradient:"#3d1878-#2a1150" \
  \( "$ICON_SVG" -background none -resize "200x200" \) \
  -gravity Center -composite \
  "android/app/src/main/res/drawable/splash.png"
echo "   drawable/splash.png ✓"

make_android_splash mdpi 320 480
make_android_splash hdpi 480 800
make_android_splash xhdpi 720 1280
make_android_splash xxhdpi 960 1600
make_android_splash xxxhdpi 1280 1920

make_android_splash_land mdpi 480 320
make_android_splash_land hdpi 800 480
make_android_splash_land xhdpi 1280 720
make_android_splash_land xxhdpi 1600 960
make_android_splash_land xxxhdpi 1920 1280

# ────────────────────────────────────────────
# 4. iOS splash screens (2732×2732)
# ────────────────────────────────────────────
echo ""
echo "→ iOS splash screens 2732×2732..."
IOS_SPLASH_DIR="ios/App/App/Assets.xcassets/Splash.imageset"
mkdir -p "$IOS_SPLASH_DIR"

make_ios_splash() {
  local out="$1"
  magick -size "2732x2732" gradient:"#3d1878-#2a1150" \
    \( "$ICON_SVG" -background none -resize "700x700" \) \
    -gravity Center -composite \
    "$out"
}

make_ios_splash "$IOS_SPLASH_DIR/splash-2732x2732.png"
cp "$IOS_SPLASH_DIR/splash-2732x2732.png" "$IOS_SPLASH_DIR/splash-2732x2732-1.png"
cp "$IOS_SPLASH_DIR/splash-2732x2732.png" "$IOS_SPLASH_DIR/splash-2732x2732-2.png"
echo "   iOS splash 2732×2732 ✓"

# ────────────────────────────────────────────
# 5. Google Play & App Store store assets
# ────────────────────────────────────────────
echo ""
echo "→ Google Play & App Store assets..."
mkdir -p store-assets

# 512×512 icon (Google Play)
svg_to_png 512 "store-assets/icon-512.png"
echo "   icon-512.png (Google Play) ✓"

# 1024×1024 icon (App Store)
svg_to_png 1024 "store-assets/icon-1024.png"
echo "   icon-1024.png (App Store) ✓"

# Google Play feature graphic 1024×500
magick -size "1024x500" gradient:"#3d1878-#2a1150" \
  \( "$ICON_SVG" -background none -resize "240x240" \) \
  -gravity West -geometry "+80+0" -composite \
  \( -size "560x80" xc:none -fill "#ffd447" \
     -font DejaVu-Sans-Bold -pointsize 58 \
     -annotate +0+58 "MATH GALAXY" \) \
  -gravity East -geometry "-80-20" -composite \
  \( -size "560x40" xc:none -fill "#e6c6ff" \
     -font DejaVu-Sans -pointsize 28 \
     -annotate +0+28 "El universo de las matemáticas" \) \
  -gravity East -geometry "-80+50" -composite \
  "store-assets/feature-graphic-1024x500.png"
echo "   feature-graphic-1024x500.png ✓"

# ────────────────────────────────────────────
# 6. Screenshots (phone + tablet)
# ────────────────────────────────────────────
echo ""
echo "→ Generating screenshots..."
mkdir -p store-assets/screenshots

# Phone screenshot 1 — Main menu (1080×1920)
magick -size "1080x1920" gradient:"#3d1878-#2a1150" \
  \( "$ICON_SVG" -background none -resize "340x340" \) \
  -gravity North -geometry "+0+160" -composite \
  \( -size "900x90" xc:none -fill "#ffd447" \
     -font DejaVu-Sans-Bold -pointsize 62 \
     -annotate +0+72 "MATH GALAXY" \) \
  -gravity North -geometry "+0+540" -composite \
  \( -size "900x50" xc:none -fill "#e6c6ff" \
     -font DejaVu-Sans -pointsize 32 \
     -annotate +0+38 "Aprende matemáticas jugando" \) \
  -gravity North -geometry "+0+640" -composite \
  \( -size "600x110" xc:"#5a2ea0" -alpha set \
     -draw "roundrectangle 0,0 600,110 20,20" \
     -fill "#ffd447" -font DejaVu-Sans-Bold -pointsize 48 \
     -annotate +0+72 "  ¡JUGAR!  " \) \
  -gravity Center -geometry "+0+120" -composite \
  \( -size "600x110" xc:"#3a1870" -alpha set \
     -draw "roundrectangle 0,0 600,110 20,20" \
     -fill "#ffffff" -font DejaVu-Sans -pointsize 40 \
     -annotate +0+65 "  Niveles  " \) \
  -gravity Center -geometry "+0+270" -composite \
  "store-assets/screenshots/phone-01-menu.png"
echo "   phone-01-menu.png ✓"

# Phone screenshot 2 — Gameplay (1080×1920)
magick -size "1080x1920" gradient:"#2a1150-#1a0a38" \
  \( -size "1080x80" xc:"#1a0a38" \
     -fill "#ffd447" -font DejaVu-Sans-Bold -pointsize 36 \
     -annotate +20+52 "MATH GALAXY   ★ 3240 pts   ❤ ❤ ❤" \) \
  -gravity North -geometry "+0+0" -composite \
  \( -size "900x200" xc:"#3d1878" -alpha set \
     -draw "roundrectangle 0,0 900,200 30,30" \
     -fill "#ffffff" -font DejaVu-Sans-Bold -pointsize 90 \
     -annotate +0+145 "    7 × 8 = ?    " \) \
  -gravity North -geometry "+0+180" -composite \
  \( -size "420x140" xc:"#5a2ea0" \
     -draw "roundrectangle 0,0 420,140 20,20" \
     -fill "#ffd447" -font DejaVu-Sans-Bold -pointsize 68 \
     -annotate +0+100 "  42  " \) \
  -gravity Center -geometry "-250-120" -composite \
  \( -size "420x140" xc:"#5a2ea0" \
     -draw "roundrectangle 0,0 420,140 20,20" \
     -fill "#ffffff" -font DejaVu-Sans-Bold -pointsize 68 \
     -annotate +0+100 "  56  " \) \
  -gravity Center -geometry "+250-120" -composite \
  \( -size "420x140" xc:"#5a2ea0" \
     -draw "roundrectangle 0,0 420,140 20,20" \
     -fill "#ffffff" -font DejaVu-Sans-Bold -pointsize 68 \
     -annotate +0+100 "  48  " \) \
  -gravity Center -geometry "-250+80" -composite \
  \( -size "420x140" xc:"#5a2ea0" \
     -draw "roundrectangle 0,0 420,140 20,20" \
     -fill "#ffffff" -font DejaVu-Sans-Bold -pointsize 68 \
     -annotate +0+100 "  63  " \) \
  -gravity Center -geometry "+250+80" -composite \
  "store-assets/screenshots/phone-02-gameplay.png"
echo "   phone-02-gameplay.png ✓"

# Phone screenshot 3 — Level select (1080×1920)
magick -size "1080x1920" gradient:"#3d1878-#2a1150" \
  \( -size "1080x100" xc:"#1a0a38" \
     -fill "#ffffff" -font DejaVu-Sans-Bold -pointsize 44 \
     -annotate +20+66 "← Elige tu nivel" \) \
  -gravity North -geometry "+0+0" -composite \
  \( -size "900x110" xc:"#ffd447" \
     -draw "roundrectangle 0,0 900,110 18,18" \
     -fill "#1a0a38" -font DejaVu-Sans-Bold -pointsize 44 \
     -annotate +0+76 "  ⭐ Suma y Resta  " \) \
  -gravity North -geometry "+0+160" -composite \
  \( -size "900x110" xc:"#5a2ea0" \
     -draw "roundrectangle 0,0 900,110 18,18" \
     -fill "#ffd447" -font DejaVu-Sans-Bold -pointsize 44 \
     -annotate +0+76 "  🔢 Multiplicación  " \) \
  -gravity North -geometry "+0+310" -composite \
  \( -size "900x110" xc:"#5a2ea0" \
     -draw "roundrectangle 0,0 900,110 18,18" \
     -fill "#ffffff" -font DejaVu-Sans-Bold -pointsize 44 \
     -annotate +0+76 "  ➗ División  " \) \
  -gravity North -geometry "+0+460" -composite \
  \( -size "900x110" xc:"#3a1870" \
     -draw "roundrectangle 0,0 900,110 18,18" \
     -fill "#888888" -font DejaVu-Sans-Bold -pointsize 44 \
     -annotate +0+76 "  🔒 Fracciones  " \) \
  -gravity North -geometry "+0+610" -composite \
  "store-assets/screenshots/phone-03-levels.png"
echo "   phone-03-levels.png ✓"

# Tablet screenshot 1 — Gameplay 1600×2560
magick -size "1600x2560" gradient:"#3d1878-#2a1150" \
  \( "$ICON_SVG" -background none -resize "260x260" \) \
  -gravity NorthEast -geometry "+60+40" -composite \
  \( -size "1400x280" xc:"#3d1878" -alpha set \
     -draw "roundrectangle 0,0 1400,280 30,30" \
     -fill "#ffffff" -font DejaVu-Sans-Bold -pointsize 128 \
     -annotate +0+198 "   12 + 45 = ?   " \) \
  -gravity North -geometry "+0+340" -composite \
  \( -size "600x180" xc:"#5a2ea0" \
     -draw "roundrectangle 0,0 600,180 24,24" \
     -fill "#ffd447" -font DejaVu-Sans-Bold -pointsize 96 \
     -annotate +0+138 "  57  " \) \
  -gravity Center -geometry "-370-160" -composite \
  \( -size "600x180" xc:"#5a2ea0" \
     -draw "roundrectangle 0,0 600,180 24,24" \
     -fill "#ffffff" -font DejaVu-Sans-Bold -pointsize 96 \
     -annotate +0+138 "  67  " \) \
  -gravity Center -geometry "+370-160" -composite \
  \( -size "600x180" xc:"#5a2ea0" \
     -draw "roundrectangle 0,0 600,180 24,24" \
     -fill "#ffffff" -font DejaVu-Sans-Bold -pointsize 96 \
     -annotate +0+138 "  47  " \) \
  -gravity Center -geometry "-370+100" -composite \
  \( -size "600x180" xc:"#5a2ea0" \
     -draw "roundrectangle 0,0 600,180 24,24" \
     -fill "#ffffff" -font DejaVu-Sans-Bold -pointsize 96 \
     -annotate +0+138 "  77  " \) \
  -gravity Center -geometry "+370+100" -composite \
  "store-assets/screenshots/tablet-01-gameplay.png"
echo "   tablet-01-gameplay.png ✓"

echo ""
echo "=== All assets generated! ==="
echo ""
echo "Summary of outputs:"
echo "  Android icons:    android/app/src/main/res/mipmap-*/ic_launcher*.png"
echo "  Android splashes: android/app/src/main/res/drawable*/splash.png"
echo "  iOS AppIcon:      ios/App/App/Assets.xcassets/AppIcon.appiconset/"
echo "  iOS Splash:       ios/App/App/Assets.xcassets/Splash.imageset/"
echo "  Google Play:      store-assets/icon-512.png, feature-graphic-1024x500.png"
echo "  App Store:        store-assets/icon-1024.png"
echo "  Screenshots:      store-assets/screenshots/*.png"
