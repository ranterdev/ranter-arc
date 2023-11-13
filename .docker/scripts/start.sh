#!/bin/bash

echo "Applying Database Migrations"
/app/node_modules/.bin/prisma migrate deploy

echo "Starting Application"
node /app/lib/servers/graphql-main.js