#!/usr/bin/env bash
# Builds the zip to upload to the Chrome Web Store.
set -euo pipefail
cd "$(dirname "$0")"
version=$(node -p "require('./manifest.json').version")
mkdir -p dist
out="dist/sticky-mic-for-claude-$version.zip"
rm -f "$out"
python -I -c "
import sys, zipfile
with zipfile.ZipFile(sys.argv[1], 'w', zipfile.ZIP_DEFLATED) as z:
    for f in sys.argv[2:]:
        z.write(f)
" "$out" manifest.json mic.js icons/icon16.png icons/icon32.png icons/icon48.png icons/icon128.png
echo "$out"
