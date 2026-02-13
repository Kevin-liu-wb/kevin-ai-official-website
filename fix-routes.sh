#!/bin/bash
# Fix Next.js static export dynamic route issue - Optimized version for low memory

cd /c/workfolder/ebaocloud-official/dist 2>/dev/null || exit 0

echo "Fixing Next.js static export..."

# Check if source files exist
if [ ! -d "/c/workfolder/ebaocloud-official/.next/server/app/[lng/]" ]; then
  echo "No build output found"
  exit 0
fi

# Copy files from .next to dist
if [ -d "zh-CN" ] && [ -d "en" ]; then
  cp -r /c/workfolder/ebaocloud-official/.next/server/app/[lng/]/* zh-CN/ 2>/dev/null
  cp -r /c/workfolder/ebaocloud-official/.next/server/app/[lng/]/* en/ 2>/dev/null
fi

# Remove broken directories
rm -rf "[lng" "[lng]" 2>/dev/null

# Convert HTML files to directory structure
for dir in zh-CN en; do
  if [ -d "/c/workfolder/ebaocloud-official/dist/$dir" ]; then
    cd "/c/workfolder/ebaocloud-official/dist/$dir"
    
    # Convert root level HTML files
    for file in *.html 2>/dev/null; do
      if [ "$file" != "index.html" ] && [ -f "$file" ]; then
        mkdir -p "${file%.html}" 2>/dev/null
        mv "$file" "${file%.html}/index.html" 2>/dev/null
      fi
    done
    
    # Convert subdirectory HTML files
    find . -name "*.html" -path "*/*" ! -name "index.html" -type f 2>/dev/null | while read file; do
      target_dir=$(dirname "$file")/$(basename "$file" .html)
      mkdir -p "$target_dir" 2>/dev/null
      mv "$file" "$target_dir/index.html" 2>/dev/null
    done
  fi
done

# Clean up build files
cd /c/workfolder/ebaocloud-official/dist
find . -type f \( -name "*.js" -o -name "*.js.nft.json" -o -name "*.rsc" -o -name "*.meta" \) -delete 2>/dev/null

echo "Done!"
find /c/workfolder/ebaocloud-official/dist -name "index.html" 2>/dev/null | wc -l
echo "pages generated"
