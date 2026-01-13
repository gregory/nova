#!/usr/bin/env bash
set -euo pipefail

if [ $# -lt 2 ]; then
  echo "Usage: $0 <phone_or_email> <vcf_path> [message]" >&2
  exit 1
fi

target="$1"
file_path="$2"
message_text="${3:-}"

if [ ! -f "$file_path" ]; then
  echo "File not found: $file_path" >&2
  exit 1
fi

script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
abs_file_path="$(cd "$(dirname "$file_path")" && pwd)/$(basename "$file_path")"

osascript "$script_dir/message.scpt" "$target" "$abs_file_path" "$message_text"
