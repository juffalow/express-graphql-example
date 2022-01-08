FROM node:16-alpine AS build

WORKDIR /home/node

COPY . .
RUN yarn install --frozen-lockfile && yarn build

FROM node:16-alpine

USER node
EXPOSE 3010

WORKDIR /home/node

COPY --chown=node:node --from=build /home/node/dist ./dist
COPY --chown=node:node --from=build /home/node/package.json /home/node/yarn.lock ./
RUN yarn install --frozen-lockfile --production

CMD [ "node", "dist/index.js" ]
