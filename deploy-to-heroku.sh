#!/bin/sh

cd client
REACT_APP_API_URL=https://mytestcase.herokuapp.com npm run build
cd ../server
rm -rf build public
mv ../client/build .
mv build public
git add --all
git commit -a
git subtree push --prefix server heroku master
