FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install


COPY router.mjs ./

EXPOSE 3000

CMD ["node", "app.js"]
