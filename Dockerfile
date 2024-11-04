FROM node:22-alpine AS build

RUN corepack enable
RUN yarn set version berry

RUN apk add dumb-init

WORKDIR /home/node

COPY . .

RUN yarn install --immutable
RUN yarn build

FROM node:22-alpine

ENV NODE_ENV production

COPY --from=build /usr/bin/dumb-init /usr/bin/dumb-init

RUN apk update && \
  apk upgrade --no-cache && \
  corepack enable && \
  yarn set version berry && \
  addgroup --gid 3000 --system juffgroup && \
  adduser  --uid 2000 --system --ingroup juffgroup juffuser && \
  mkdir /home/juffuser/express-graphql-example/

USER 2000:3000

WORKDIR /home/juffuser/express-graphql-example/

COPY --from=build /home/node/dist ./dist
COPY --from=build /home/node/node_modules ./node_modules

EXPOSE 3010

CMD [ "dumb-init", "node", "dist/index.js" ]
