#!/usr/bin/env sh

npm run build

cd docs/.vuepress/dist

echo  "www.3danli.com" > CNAME

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:daqianduanshuo/daqianduanshuo.github.io.git main:gh-pages

