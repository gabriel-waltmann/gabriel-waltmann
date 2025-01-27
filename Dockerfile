FROM node:18-alpine

WORKDIR /app

COPY package.json ./

COPY next.config.js ./next.config.mjs

RUN npm install

COPY . .

EXPOSE 3000