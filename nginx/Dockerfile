FROM nginx:1.13
LABEL MAINTAINER="yuki@coala.io"

ADD nginx.conf /etc/nginx/nginx.conf
ADD nginx.conf.d /etc/nginx/conf.d

CMD nginx -g "daemon off;"
