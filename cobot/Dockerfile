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

ENV USER=hubot ROOT=/hubot

RUN groupadd -r $USER && \
    useradd -r -m --home-dir=$ROOT -s /usr/sbin/nologin \
    -g $USER $USER && \
    chown -R $USER:$USER $ROOT

USER $USER

CMD ["sh", "-c", "./bin/hubot -a gitter2-patched --name $BOT_NAME"]
