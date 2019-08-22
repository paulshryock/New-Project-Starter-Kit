#!/bin/sh
echo "Building $PLATFORM to build/$PLATFORM and debugging"
DEBUG=Eleventy* npx eleventy --output=build/$PLATFORM --dryrun