#!/bin/sh

chmod +x ./_scripts/lighthouse.sh &&
source .env &&
mkdir -p _logs/lighthouse
cd _logs/lighthouse
lighthouse http://localhost:$PORT --budget-path=../../performance-budget.json --view