#!/bin/bash
# grpcurl command for querying an account via Access API
#
# Usage:
#   ./grpcurl_account_query.sh [server_address:port] [block_height]
#
# Example:
#   ./grpcurl_account_query.sh
#   ./grpcurl_account_query.sh access-001.mainnet28.nodes.onflow.org:9000
#   ./grpcurl_account_query.sh access-001.mainnet28.nodes.onflow.org:9000 133550450

SERVER="${1:-access-001.mainnet28.nodes.onflow.org:9000}"
BLOCK_HEIGHT="${2:-}"

# Account address: 0xfd595328d97d33d5
# Base64-encoded address
ADDRESS_B64="/VlTKNl9M9U="

# Get the directory where this script is located
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROTO_DIR="$SCRIPT_DIR/protobuf"

if [ -n "$BLOCK_HEIGHT" ]; then
  echo "Querying account at block height $BLOCK_HEIGHT..." >&2
  RESPONSE=$(grpcurl -plaintext \
    -import-path "$PROTO_DIR" \
    -proto flow/access/access.proto \
    -d "{
      \"address\": \"$ADDRESS_B64\",
      \"block_height\": $BLOCK_HEIGHT
    }" \
    "$SERVER" \
    flow.access.AccessAPI/GetAccountAtBlockHeight)
else
  echo "Querying account at latest block..." >&2
  RESPONSE=$(grpcurl -plaintext \
    -import-path "$PROTO_DIR" \
    -proto flow/access/access.proto \
    -d "{
      \"address\": \"$ADDRESS_B64\"
    }" \
    "$SERVER" \
    flow.access.AccessAPI/GetAccountAtLatestBlock)
fi

# Display the full response
echo "$RESPONSE"

# Decode and display balance if jq is available
if command -v jq &> /dev/null; then
  BALANCE_RAW=$(echo "$RESPONSE" | jq -r '.account.balance // empty')
  if [ -n "$BALANCE_RAW" ] && [ "$BALANCE_RAW" != "null" ]; then
    # Flow uses 8 decimal places: 1 FLOW = 10^8 smallest units
    if command -v bc &> /dev/null; then
      BALANCE_FLOW=$(echo "scale=8; $BALANCE_RAW / 100000000" | bc)
      echo "" >&2
      echo "=== Balance Decoded ===" >&2
      echo "Raw: $BALANCE_RAW smallest units" >&2
      echo "FLOW: $BALANCE_FLOW FLOW" >&2
    elif command -v python3 &> /dev/null; then
      BALANCE_FLOW=$(python3 -c "print('{:.8f}'.format($BALANCE_RAW / 100000000))")
      echo "" >&2
      echo "=== Balance Decoded ===" >&2
      echo "Raw: $BALANCE_RAW smallest units" >&2
      echo "FLOW: $BALANCE_FLOW FLOW" >&2
    fi
  fi
fi

