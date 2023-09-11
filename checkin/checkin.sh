#!/bin/bash
# to use:
# crontab -e
# 55 4 * * 1-5 /bin/bash ~/checkin.sh
# This checks in at the end of your day, can adjust to the beginning if you'd like
# Currently does not check for activity during the day, if you'd like to add this functionality use:
#
# cd ~/REPO/OF/INTEREST
# active=$(git --no-pager shortlog --summary --numbered --since=format:relative:24.hours.ago --no-merges | grep GITHUB_USERNAME | wc -l)
# if [ $active -gt 0 ]
# then
#   echo $(date +'%Y-%m-%d') > checkin/$USER
#   git add -A && git commit . -m "$USER $(date +'%Y-%m-%d')" && git push
# fi

# Need to move into location of public repo where you'd like to make your commits
# cd ~/flow/flow
echo $(date +'%Y-%m-%d') > checkin/$USER
git add -A && git commit . -m "$USER $(date +'%Y-%m-%d')" && git push
