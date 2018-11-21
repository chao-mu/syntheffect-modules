#!/bin/bash

git remote add upstream https://github.com/chao-mu/syntheffect-workspace
git pull upstream master
git submodule update --init --recursive
