FROM oven/bun:1 as base

WORKDIR /app

COPY node_modules ./node_modules
COPY bun.lockb .
COPY package.json .

RUN [ ! -d "node_modules" ] && bun install || echo "Using cached node_modules"

COPY . .

CMD ["bun","index.ts"]