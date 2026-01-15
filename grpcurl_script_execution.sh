#!/bin/bash
# grpcurl command for executing a Cadence script via Execution API
# First gets the latest block header, then executes the script at that block
#
# Usage:
#   ./grpcurl_script_execution.sh [server_address:port] [is_sealed]
#
# Example:
#   ./grpcurl_script_execution.sh
#   ./grpcurl_script_execution.sh execution-001.mainnet28.nodes.onflow.org:9000 true

SERVER="${1:-execution-001.mainnet28.nodes.onflow.org:9000}"
IS_SEALED="${2:-true}"

# Base64-encoded script
SCRIPT_B64="aW1wb3J0IE1ldGFkYXRhVmlld3MgZnJvbSAweDFkN2U1N2FhNTU4MTc0NDgKCmFjY2VzcyhhbGwpIGZ1biBtYWluKHNlcmlhbDogTWV0YWRhdGFWaWV3cy5TZXJpYWwpIHt9Cg=="

# Base64-encoded argument (JSON-encoded Cadence value)
ARG_B64="eyJ2YWx1ZSI6eyJpZCI6IkEuMWQ3ZTU3YWE1NTgxNzQ0OC5NZXRhZGF0YVZpZXdzLlNlcmlhbCIsImZpZWxkcyI6W3sidmFsdWUiOnsidmFsdWUiOiI0MiIsInR5cGUiOiJVSW50NjQifSwibmFtZSI6Im51bWJlciJ9LHsidmFsdWUiOnsidmFsdWUiOiI0MyIsInR5cGUiOiJVSW50NjQifSwibmFtZSI6Im51bWJlcjIifV19LCJ0eXBlIjoiU3RydWN0In0K"

# Get the directory where this script is located
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROTO_DIR="$SCRIPT_DIR/protobuf"

echo "Step 1: Getting latest block header (is_sealed=$IS_SEALED)..." >&2
BLOCK_HEADER_RESPONSE=$(grpcurl -plaintext \
  -import-path "$PROTO_DIR" \
  -proto flow/execution/execution.proto \
  -d "{\"is_sealed\": $IS_SEALED}" \
  "$SERVER" \
  flow.execution.ExecutionAPI/GetLatestBlockHeader)

if [ $? -ne 0 ]; then
  echo "Error: Failed to get latest block header" >&2
  exit 1
fi

# Extract block.id from the response (it's base64-encoded in JSON)
# The response format is: {"block":{"id":"<base64>",...}}
# We'll use jq if available, otherwise use sed/grep
if command -v jq &> /dev/null; then
  BLOCK_ID_B64=$(echo "$BLOCK_HEADER_RESPONSE" | jq -r '.block.id // empty')
else
  # Fallback: extract using sed (looks for "id":"<base64>")
  BLOCK_ID_B64=$(echo "$BLOCK_HEADER_RESPONSE" | sed -n 's/.*"id"\s*:\s*"\([^"]*\)".*/\1/p' | head -1)
fi

if [ -z "$BLOCK_ID_B64" ]; then
  echo "Error: Could not extract block ID from response" >&2
  echo "Response: $BLOCK_HEADER_RESPONSE" >&2
  exit 1
fi

echo "Step 2: Executing script at block ID (base64: ${BLOCK_ID_B64:0:20}...)" >&2

# Execute grpcurl command with the block ID
grpcurl -plaintext \
  -import-path "$PROTO_DIR" \
  -proto flow/execution/execution.proto \
  -d "{
    \"block_id\": \"$BLOCK_ID_B64\",
    \"script\": \"$SCRIPT_B64\",
    \"arguments\": [
      \"$ARG_B64\"
    ]
  }" \
  "$SERVER" \
  flow.execution.ExecutionAPI/ExecuteScriptAtBlockID

