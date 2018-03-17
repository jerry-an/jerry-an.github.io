rm -rf /tmp/coalpha-html
mkdir /tmp/coalpha-html
cd /Users/fanny/Documents/Gitbucket/
cp -r * /tmp/coalpha-html/
rm /tmp/coalpha-html/rawdata
cd /tmp/coalpha-html
git init
git remote add origin git@github.com:jerry-an/jerry-an.github.io.git
git add *
git commit -m "update"
git push origin master --force
