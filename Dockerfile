# build environment
FROM node:10.16.0 as builder

ENV HOME /usr/src/app
RUN mkdir $HOME
WORKDIR $HOME

COPY package.json $HOME/package.json
COPY yarn.lock $HOME/yarn.lock
USER root
RUN npm install yarn -g
RUN yarn install --network-timeout 1000000

COPY . $HOME
RUN yarn build

# production environment
FROM nginx:1.14.2-alpine
RUN rm -rf /etc/nginx/conf.d
COPY nginx/nginx.prod.conf  /etc/nginx/conf.d/default.conf
COPY --from=builder /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]