yarn run build
cd dist
git checkout -b gh-page
git init
git add .
git commit -m "v2.1.0"
git remote add origin https://github.com/RSMN574/beta.git
git push -u -f origin gh-page
echo "OK"
