# If .env is empty, set default environment variables
[ -s .env ] || echo "NODE_ENV='development'
PORT=8080
PLATFORM='site'" > .env