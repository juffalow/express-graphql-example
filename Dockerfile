FROM node:22-alpine AS build

WORKDIR /home/node

COPY . .
RUN yarn install --frozen-lockfile && yarn build

FROM node:22-alpine

ENV NODE_ENV production

RUN apk update && apk upgrade --no-cache

RUN addgroup --gid 3000 --system juffgroup \
  && adduser  --uid 2000 --system --ingroup juffgroup juffuser

USER 2000:3000

RUN mkdir /home/juffuser/express-graphql-example/
WORKDIR /home/juffuser/express-graphql-example/

COPY --from=build /home/node/dist ./dist
COPY --from=build /home/node/package.json /home/node/yarn.lock ./
RUN yarn install --frozen-lockfile --production

EXPOSE 3010

CMD [ "node", "dist/index.js" ]
