FROM node:16-buster

WORKDIR /app

COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json

RUN npm ci

RUN mkdir node_modules/.cache && chmod -R 777 node_modules/.cache

COPY . /app

EXPOSE 5173

CMD ["npm", "run", "dev:container"]