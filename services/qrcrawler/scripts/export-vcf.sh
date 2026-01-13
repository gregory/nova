#!/usr/bin/env bash
set -euo pipefail

BASE_URL=${BASE_URL:-http://localhost:8787}
OUT_DIR=${OUT_DIR:-./exports}
LIMIT=${LIMIT:-1000}
SINCE=${SINCE:-}

mkdir -p "$OUT_DIR"

payload=$(jq -n --arg since "$SINCE" --argjson limit "$LIMIT" 'if $since == "" then {limit: $limit} else {since: $since, limit: $limit} end')

filename=$(date "+%d_%m_%Y_%Hh%M").vcf
tmp_file=$(mktemp)

http_status=$(curl -sS -o "$tmp_file" -w "%{http_code}" -X POST "$BASE_URL/results.vcf" \
  -H "content-type: application/json" \
  -d "$payload")

if [ "$http_status" = "204" ]; then
  rm -f "$tmp_file"
  echo "No contacts to export."
  exit 0
fi

if [ "$http_status" != "200" ]; then
  rm -f "$tmp_file"
  echo "Export failed with status $http_status." >&2
  exit 1
fi

mv "$tmp_file" "$OUT_DIR/$filename"
echo "Saved $OUT_DIR/$filename"
