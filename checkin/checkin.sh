#!/bin/bash
# cd ~/flow/flow
echo $(date +'%Y-%m-%d') > checkin/$USER
git add -A && git commit . -m "$USER $(date +'%Y-%m-%d')"

