FROM node:14.17.6-alpine AS build

USER node
RUN mkdir /home/node/express-graphql-example/ && chown -R node:node /home/node/express-graphql-example
WORKDIR /home/node/express-graphql-example

COPY --chown=node:node . .
RUN yarn install --frozen-lockfile && yarn build

FROM node:14.17.6-alpine

USER node
EXPOSE 3010

RUN mkdir /home/node/express-graphql-example/ && chown -R node:node /home/node/express-graphql-example
WORKDIR /home/node/express-graphql-example

COPY --chown=node:node --from=build /home/node/express-graphql-example/dist ./dist
COPY --chown=node:node --from=build /home/node/express-graphql-example/package.json /home/node/express-graphql-example/yarn.lock ./
RUN yarn install --frozen-lockfile --production

CMD [ "node", "dist/index.js" ]
