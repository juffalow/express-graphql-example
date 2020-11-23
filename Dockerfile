FROM node:14.15.1-alpine AS build

USER node
RUN mkdir /home/node/zdielaj-si-backend/ && chown -R node:node /home/node/zdielaj-si-backend
WORKDIR /home/node/zdielaj-si-backend

COPY --chown=node:node . .
RUN yarn install --frozen-lockfile && yarn build

FROM node:14.15.1-alpine

USER node
EXPOSE 3010

RUN mkdir /home/node/zdielaj-si-backend/ && chown -R node:node /home/node/zdielaj-si-backend
WORKDIR /home/node/zdielaj-si-backend

COPY --chown=node:node --from=build /home/node/zdielaj-si-backend/dist ./dist
COPY --chown=node:node --from=build /home/node/zdielaj-si-backend/package.json /home/node/zdielaj-si-backend/yarn.lock ./
RUN yarn install --frozen-lockfile --production

CMD [ "node", "dist/index.js" ]
