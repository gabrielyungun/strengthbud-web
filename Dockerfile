# build environment
FROM node:10.16.0

# Home directory
ENV HOME /home/webapp

# set working directory
RUN mkdir $HOME
WORKDIR $HOME

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH $HOME/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json $HOME/package.json
COPY yarn.lock $HOME/yarn.lock

USER root
RUN npm install yarn -g
RUN yarn install --network-timeout 1000000