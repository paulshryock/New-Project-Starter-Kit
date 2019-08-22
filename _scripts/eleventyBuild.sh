#!/bin/sh
echo "Building $PLATFORM to build/$PLATFORM"
mkdir -p ./build/$PLATFORM
npx eleventy --output=build/$PLATFORM