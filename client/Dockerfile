FROM node:10

RUN mkdir /app
WORKDIR /app

ADD package.json package-lock.json ./
RUN npm install

ADD . .

CMD [ "npm", "start" ]
