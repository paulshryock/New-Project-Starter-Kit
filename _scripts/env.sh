#!/bin/sh

# If .env is empty, set default environment variables
[ -s .env ] || echo "ELEVENTY_ENV='development'
NODE_ENV='development'
PLATFORM='site'
PORT=8080" > .env
