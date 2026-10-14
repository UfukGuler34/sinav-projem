#!/usr/bin/env bash
# Sınav Projem'i localhost'ta açar. Kapatmak için bu terminalde Ctrl+C.
cd "$(dirname "$(readlink -f "$0")")"
PORT=8642
URL="http://localhost:$PORT"

if curl -s -o /dev/null "$URL" 2>/dev/null; then
  echo "Zaten çalışıyor: $URL"
  xdg-open "$URL" >/dev/null 2>&1 &
  exit 0
fi

( sleep 1; xdg-open "$URL" >/dev/null 2>&1 ) &
echo "Sınav Projem açık: $URL"
echo "Kapatmak için Ctrl+C."
if command -v python3 >/dev/null 2>&1; then
  exec python3 -m http.server "$PORT" --bind 127.0.0.1
else
  exec node sunucu.js "$PORT"
fi
