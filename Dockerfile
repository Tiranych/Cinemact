FROM node:18-alpine
WORKDIR /app
COPY package*.json .
RUN npm ci
COPY . .
EXPOSE 8080
CMD ["sh", "-c", "npm run build && npx ts-node-dev src/server/server.ts"]