FROM node:14-buster-slim
MAINTAINER Ali Ghanavatian "ghanavatian.ali@gmail.com"

ENV NODE_ROOT /src

RUN mkdir $NODE_ROOT
WORKDIR $NODE_ROOT

ENV TZ=Europe/Berlin
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

RUN npm install -g serve

COPY yarn.lock yarn.lock
COPY package.json package.json

RUN yarn

COPY . $NODE_ROOT

EXPOSE 3000

ENV NODE_ENV=production

# the actual value is from docker-compose.yml
ARG API='https://casvid-api.aqlinux.ir'
ARG ASSETS='https://casvid-api.aqlinux.ir'

ENV REACT_APP_API_URL=${API}
ENV REACT_APP_ASSETS_HOST=${ASSETS}

RUN yarn build

ENTRYPOINT serve -s build -l 3000