#!/bin/sh
if [ "$NODE_ENV" = "development" ]; then
    echo "Starting '$APP_NAME' in dev mode"
    yarn start:dev "$APP_NAME"
elif [ "$NODE_ENV" = "test" ]; then
    yarn test "$APP_NAME"
else
    yarn build "$APP_NAME"
    yarn start:prod "$APP_NAME"
fi
