#!/bin/bash

SOURCE="${BASH_SOURCE[0]}"
while [ -h "$SOURCE" ]; do # resolve $SOURCE until the file is no longer a symlink
  DIR="$( cd -P "$( dirname "$SOURCE" )" >/dev/null && pwd )"
  SOURCE="$(readlink "$SOURCE")"
  [[ $SOURCE != /* ]] && SOURCE="$DIR/$SOURCE" # if $SOURCE was a relative symlink, we need to resolve it relative to the path where the symlink file was located
done
DIR="$( cd -P "$( dirname "$SOURCE" )" >/dev/null && pwd )"


git remote add upstream https://github.com/chao-mu/syntheffect-workspace
git pull upstream master
git submodule update --init --recursive

wget https://github.com/chao-mu/syntheffect/releases/download/v1-pre-alpha.01/syntheffect -O $DIR/bin/syntheffect
chmod +x $DIR/bin/syntheffect
