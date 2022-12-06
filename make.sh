#!/bin/bash
if [ "${1}" == "blue" ];
then
    cd web
    docker image build --tag kemabc123/husky:${1} .
else
    cd web
    docker image build \
    --build-arg TITLE='green Husky' \
    --build-arg IMAGE='husky-2.jpg' \
    --build-arg VERSION='1.1.0' \
    --tag kemabc123/husky:${1} \
    .
fi

