FROM node:22 AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

COPY .env.local .env.local

RUN npm run build

FROM node:22

WORKDIR /app

COPY --from=build /app ./

EXPOSE 3000

CMD ["npm", "start"]
