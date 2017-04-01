FROM node:slim
MAINTAINER Kaisar Arkhan (Yuki) <ykno@protonmail.com>

LABEL name="cobot"
LABEL version="0.1"

EXPOSE 8080

RUN mkdir /hubot
WORKDIR /hubot

COPY git /hubot

RUN npm install && \
    npm install hubot-gitter2-patched && \
    npm cache clean

CMD ["sh", "-c", "./bin/hubot -a gitter2-patched --name $BOT_NAME"]
