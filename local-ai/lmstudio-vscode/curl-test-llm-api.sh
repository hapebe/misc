#!/bin/bash
if [ "$#" -ne 2 ]; then
    echo "Error: Two parameters are required."
    echo "Usage:"
    echo "$0 <host> <config file>"
    exit 1
fi

HOST=$1
QUERY=$2

curl -X POST http://${HOST}:1234/v1/chat/completions \
  -H "Content-Type: application/json" \
  -d "@${QUERY}"
