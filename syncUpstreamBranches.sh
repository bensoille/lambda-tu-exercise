#!/bin/bash

echo ""
echo -e "\e[91m/!\\ WARNING ! /!\\ Please ensure that your working directory is clean !!!!!\e[0m"
echo ""
echo -e '\e[1m`git status` command MUST return \e[21m:'
echo "\"Your branch is up to date with 'origin/master'."
echo "nothing to commit, working tree clean\""
echo ""
echo -e "\e[1mConfirm \e[21m? (write yes to continue)"

# Request confirmation, it's important not to break anything
read confirm
if [[ $confirm != 'yes' ]]; then 
    # Something else than 'yes' has been answered : exit with message
    echo -e '\e[91mAborting.\e[0m'
    exit 1
fi

echo -e "\nlet's go...\n"

# Fetch upstream branches to synchronize
echo 'Fetching remote branches to sync'
git fetch upstream
if [ $? -ne 0 ]; then
    echo -e '\e[91mNo remote upstream repository found. Aborting.\e[0m'
    exit 1
fi

# Synchronise each exercise branch
# Some others will be added soon
for branch in tu-appaddition-exercise tu-moveurl-exercise tu-add-exercise tu-run-exercise tu_change_exercise; do
    # Some friendly message
    echo 'Syncing branch '$branch
    echo '_____________________________'
    
    # First get on master
    # Then locally create branch from upstream 
    # And push local branch to forked repository only if branch created ok
    # Finally, get back on master 
    git checkout master && git checkout -b $branch upstream/$branch && git push -u origin $branch && git checkout master
    
    if [ $? -ne 0 ]; then
        echo -e '\e[91mCould not sync branch '$branch'. Did it exist previously ?\e[0m'
    fi    
    
    # Some friendly closing message
    echo 'Branch '$branch' synced'
    echo -e "----------------------------\n\n"
done
