FROM node:18

WORKDIR /app

# Install dependencies
COPY *.json ./yarn.lock ./
RUN yarn install --frozen-lockfile

# Run Source Code
COPY . .