FROM node:16.13.1

WORKDIR /app

COPY . /app

RUN npm ci
RUN mkdir node_modules/.cache && chmod -R 777 node_modules/.cache

EXPOSE 2000

CMD ["npm","run","dev"]
