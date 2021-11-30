npm run build
cd ..
git add -A
git commit -m build
git push
git subtree push --prefix portfolio/dist origin gh-pages
cd portfolio