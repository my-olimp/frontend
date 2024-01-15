# Этап 1: Сборка TypeScript
FROM node:21 AS build

WORKDIR .

COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build

# Этап 2: Создание образа
FROM node:21

WORKDIR .

# COPY --from=build /usr/src/app/out ./out
COPY package.json package-lock.json ./
RUN npm install --production

CMD ["npm", "start"]
