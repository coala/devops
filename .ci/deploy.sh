#!/usr/bin/env bash

# Automatic deployer script
# This script is meant to be run on solar.coala.io!

WORKDIR=/opt/solar

log() {
    echo "$(date -u "+%b %Y %T") $USER: $*"
}

fail() {
    log "FAIL: $*"
    exit 1
}

update_service() {
    directory=$1
    name=$(basename $directory)

    pushd $directory

    log "Updating $name ..."

    docker-compose up --force-recreate --build -d || \
        log "An error has occured while deploying $name"

    popd
}

update_services() {
    for service in "$@"; do
        update_service $service
    done
}

log "Starting Automated Deployment ..."

cd $WORKDIR || fail "Working directory doesn't exist"

log "Pulling changes ..."

git pull || fail "An error has occured while pulling updates"

log "Retrieving services ..."

services=$(find $WORKDIR -maxdepth 2 -name "docker-compose.yml" -printf "%h\n")
services_len=$(echo "$services" | wc -l)

log "Found $services_len services, here's a list of them: "

for service in $services; do
    log " * $(basename $service)"
done

log "Updating services ..."

update_services $services

log "Deployment finished! Have a nice day!"
