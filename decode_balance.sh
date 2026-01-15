#!/bin/bash
# Decode Flow account balance from smallest units to FLOW
# Flow uses 8 decimal places: 1 FLOW = 10^8 smallest units
#
# Usage:
#   ./decode_balance.sh <balance_in_smallest_units>
#   echo "27019709892" | ./decode_balance.sh

if [ -z "$1" ]; then
  # Read from stdin if no argument provided
  BALANCE=$(cat)
else
  BALANCE="$1"
fi

# Flow has 8 decimal places
FLOW_BALANCE=$(echo "scale=8; $BALANCE / 100000000" | bc)

echo "Balance: $BALANCE smallest units = $FLOW_BALANCE FLOW"

