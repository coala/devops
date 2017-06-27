FROM yukiisbored/planet-venus:1

ENV PLANET_DIRECTORY=/planet-coala \
    PLANET_CONFIG_FILE=/planet-coala/planet.ini \
    PLANET_OUTPUT=/planet-coala/output

COPY crontab /etc/crontab
COPY planet $PLANET_DIRECTORY

RUN chmod 600 /etc/crontab
