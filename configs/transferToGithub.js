#!/usr/bin/env node
var shell = require('shelljs');
var path = require('path');
const argv = require('yargs').argv;
var {
  exec,
  rm,
  mkdir,
  cp,
  echo,
  cd,
  mv,
  exit,
  stderr
} = shell;

if (!argv.m) {
  echo('请输入-m参数，用来指定git commit的message');
  exit(1);
}


var githubPage = path.resolve(__dirname, '../../../kmCha.github.io');
var mainSite = path.resolve(__dirname, '../../../kmCha.github.io/main-site');
var releasePath = path.resolve(__dirname, '../release');

// 删除github page文件夹下main-site文件夹
echo('删除' + githubPage + '目录下main-site文件夹');
rm('-rf', mainSite);
// 创建main-site文件夹
echo('在' + githubPage + '目录下创建main-site文件夹');
mkdir('-p', mainSite);
// 复制release下面的文件到main-side里
echo('复制' + releasePath + '下面的文件到' + mainSite + '里');
cp('-R', releasePath + '/*', mainSite);
// 删除release文件夹
echo('删除' + releasePath);
rm('-rf', releasePath);
// 把main-side文件夹里的index.html移动到github page里
echo('把' + mainSite + '里的index.html移动到' + githubPage + '里');
mv(mainSite + '/index.html', githubPage);
// 切换工作目录到github page
echo('切换工作目录到' + githubPage);
cd(githubPage);
// 执行git add .
echo('执行git add .');
exec('git add .', function (code, stdout, stderr) {
  // 正确执行
  if (code == 0) {
    echo(stdout);
    echo('执行git commit -m');
    exec('git commit -m' + argv.m, function (_code, _stdout, _stderr) {
      // 正确commit
      if (_code == 0) {
        echo('执行git push');
        exec('git push', function (__code, __stdout, __stderr) {
          // 正确push
          if (__code == 0) {
            echo(__stdout);
          } else {
            echo(__stderr);
          }
        })
      } else {
        echo(_stderr);
      }
    })
  } else {
    echo(stderr);
  }
})

