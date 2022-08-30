FROM node:16.15.0-alpine

WORKDIR /usr/src/app

COPY ./reactApp/package.json ./reactApp/package-lock.json ./
RUN npm install

COPY ./reactApp/ .

CMD ["npm", "start"]