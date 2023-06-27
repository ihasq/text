#!/bin/bash

PORT=4000

nc -l "$PORT" -w 1 < stream | awk '/HTTP/ {system("./get_content.sh d" $2)}' > stream