FROM softonic/node-prune AS prune

FROM node:16.3-slim AS build
ENV NODE_ENV production
WORKDIR /app
COPY --from=prune /go/bin/node-prune /usr/local/bin/
COPY . . 
RUN npm install

FROM node:16.3-slim
ENV NODE_ENV production
ARG TITLE='Blue husky'
ARG IMAGE='husky-1.jpg'
ARG VERSION='1.0.0'
ENV web_TITLE $TITLE
ENV web_IMAGE $IMAGE
ENV web_VERSION $VERSION
WORKDIR /app
COPY --from=build /app .
COPY . .
EXPOSE 3000
CMD ["node", "server.js"]

