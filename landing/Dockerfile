FROM registry.gitlab.com/coala/landing
MAINTAINER Muhammad Kaisar Arkhan <yukinagato@protonmail.com>

ENV ROOT=/app USER=landing NUM_WORKERS=3 TIMEOUT=30 LOG_LEVEL=info

RUN groupadd -r $USER && \
    useradd -r -m --home-dir=$ROOT -s /usr/sbin/nologin \
    -g $USER $USER

RUN chown $USER:$USER -R $ROOT

RUN pip install gevent

CMD cron && \
    gunicorn coala_web.wsgi \
    --name=webservices \
    --workers=$NUM_WORKERS \
    --user=$USER --group=$USER \
    --timeout=$TIMEOUT \
    --bind=0.0.0.0:8000 \
    --log-level=$LOG_LEVEL \
    --log-file=- \
    --worker-class=gevent
