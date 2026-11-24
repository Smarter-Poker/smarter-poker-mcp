FROM node:20-alpine
LABEL org.opencontainers.image.title="Smarter.Poker MCP Server"
LABEL org.opencontainers.image.version="1.0.7"
WORKDIR /app
COPY package.json ./
COPY src ./src
COPY bin ./bin
ENTRYPOINT ["node", "/app/bin/smarter-poker-mcp.mjs"]
