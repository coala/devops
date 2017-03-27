FROM node:slim
MAINTAINER Kaisar Arkhan (Yuki) <ykno@protonmail.com>

EXPOSE 8080

RUN mkdir /hubot
WORKDIR /hubot

COPY git /hubot

RUN npm install && \
    npm install hubot-gitter2 && \
    npm cache clean

CMD ["sh", "-c", "./bin/hubot -a gitter2 --name $BOT_NAME"]
