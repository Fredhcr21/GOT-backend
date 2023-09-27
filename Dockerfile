FROM node:lts-hydrogen AS base
WORKDIR /root/app
COPY package.json package-lock.json ./

FROM base AS dependencies
RUN npm set progress=false && npm config set depth 0
RUN npm install --only=production
RUN cp -R node_modules /tmp/prod_node_modules
RUN npm install
COPY . .

FROM dependencies AS build
RUN npm run build
RUN cp -R dist /tmp/prod_dist

FROM base AS release
COPY --from=dependencies /tmp/prod_node_modules ./node_modules
COPY --from=build /tmp/prod_dist .
RUN npm install nodemon pino-pretty -g
EXPOSE 8080
CMD [ "node", "./src/index.js" ]