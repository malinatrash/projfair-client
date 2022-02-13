deployURL="https://github.com/doyouwannatea/dzb-client.git"

npm run build
cd dist
cp index.html 404.html
git init 
git add .
git commit -m "deploy"
git checkout -b gh-pages
git push --force $deployURL gh-pages
rm -rf .git