FROM node:16-alpine AS build

RUN mkdir /home/node/express-graphql-example/ && chown -R node:node /home/node/express-graphql-example

USER node

WORKDIR /home/node/express-graphql-example

COPY --chown=node:node . .
RUN yarn install --frozen-lockfile && yarn build

FROM node:16-alpine

USER node
EXPOSE 3010

RUN mkdir /home/node/express-graphql-example/ && chown -R node:node /home/node/express-graphql-example
WORKDIR /home/node/express-graphql-example

COPY --chown=node:node --from=build /home/node/express-graphql-example/dist ./dist
COPY --chown=node:node --from=build /home/node/express-graphql-example/package.json /home/node/express-graphql-example/yarn.lock ./
RUN yarn install --frozen-lockfile --production

CMD [ "node", "dist/index.js" ]
