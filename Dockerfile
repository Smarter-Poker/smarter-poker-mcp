FROM node:20-alpine
WORKDIR /app
COPY package.json ./
COPY src ./src
COPY bin ./bin
ENTRYPOINT ["node", "/app/bin/smarter-poker-mcp.mjs"]
