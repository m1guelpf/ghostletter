FROM node:8

WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./

RUN yarn install --production

COPY . .

EXPOSE 3000

HEALTHCHECK --retries=10 CMD ["wget", "-qO-", "http://localhost:3000/health"]

CMD [ "yarn", "start" ]
