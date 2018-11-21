# syntheffect-workspace

The purpose of this repository is to give you a file structure and some base components for developing new projects and modules
with SynthEffect.

If you fork this repository, you now have version control for all your projects. ./update.sh will bring in changes to the primary repository.

If you do fork, Careful not to check in large videos as you'll make github mad.

See https://syntheffect.com/

## Getting started

The premise is that you

1) Clone this repository (possibly forking it first)
2) Run ./update.sh from inside it
3) Write new rack files in `projects/`
4) Store custom modules/effects in `personal/`

In otherwords

```
$ git clone git@github.com:chao-mu/syntheffect-workspace.git
$ cd syntheffect-workspace
$ ./update.sh
```
