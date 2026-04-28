FROM node:20-alpine

WORKDIR /app

COPY package.json package-lock.json* ./

RUN npm ci

COPY . .

EXPOSE 4325

# Using dev mode
ENV NODE_ENV=development
ENV PORT=4325

CMD ["npm", "run", "dev"]
