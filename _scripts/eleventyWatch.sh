#!/bin/sh
echo "Building $PLATFORM to build/$PLATFORM and watching"
npx eleventy --output=build/$PLATFORM --watch