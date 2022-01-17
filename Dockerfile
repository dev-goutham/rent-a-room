FROM node:17-alpine

RUN mkdir ./usr/app

WORKDIR /usr/app

COPY ./package.json ./

RUN yarn install

COPY . .


EXPOSE 3000

CMD ["npm", "run", "dev"]