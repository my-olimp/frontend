# Этап 1: Сборка TypeScript
FROM node:18 AS build

WORKDIR /usr/src/app

COPY package.json package-lock.json ./
RUN npm install

COPY ./* .
RUN npm run build

# Этап 2: Создание образа
FROM node:18

WORKDIR /usr/src/app

# COPY --from=build /usr/src/app/out ./out
COPY package.json package-lock.json ./
RUN npm install --production

CMD ["npm", "start"]
