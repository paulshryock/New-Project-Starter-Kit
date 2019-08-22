#!/bin/sh
echo "Building $PLATFORM to build/$PLATFORM and serving"
npx eleventy --output=build/$PLATFORM --serve