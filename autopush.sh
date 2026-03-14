#!/bin/bash
CARPETA="${1:-.}"

echo "Vigilando cambios en: $CARPETA"

while true; do
  inotifywait -r -e modify,create,delete,move "$CARPETA" \
    --exclude '\.git' 2>/dev/null

  echo "Cambio detectado, subiendo a GitHub..."
  cd "$CARPETA"
  git add .
  git commit -m "Auto-commit: $(date '+%Y-%m-%d %H:%M:%S')"
  git push origin main
done
