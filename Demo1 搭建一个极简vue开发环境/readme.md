
## 1. npm install
安装所有依赖模块
## 2. npm run dev
通过dev-server 运行程序，支持vue文件热更新
**关于vue-router vuex的教程可去个人网站-[小白GIS](http://www.xiaobaigis.com/Home/Index/VUE)**

## 搭建流程如下
注：开发IDE是visual studion code;在扩展中安装vetur插件，以支持.vue文件

1. 新建一个文件夹demo1，然后执行npm init,一直回车生成package.json
2. 根目录新建index.html，内容如下:
``` html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <title>demo1</title>
  </head>
  <body>
    <div id="app"></div>
  </body>
</html>

```
3. 在根目录新建src文件夹，在src文件夹中新建一个App.vue,主组件和入口文件main.js
App.vue
``` vue
<template>
  <div class="app">
  <h1>搭建一个极简的vue开发环境</h1>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data () {
       return{}
}
  }
</script>

```

main.js
``` javascript
import Vue from 'vue'
import App from './App'
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})

```
4. 安装如下依赖包，这里已经提供好了；可以直接 npm install；也可以一个个安装;程序依赖包只有一个vue；其他都是开发环境需要用的包

``` json
{
"name": "demo1",
"version": "1.0.0",
"description": "",
"main": "index.js",
"scripts": {
"test": "echo \"Error: no test specified\" && exit 1",
},
"author": "",
"license": "ISC",
"devDependencies": {
  "@babel/core": "^7.1.2",
  "@babel/preset-env": "^7.1.0",
  "babel-loader": "^8.0.4",
  "css-loader": "^1.0.1",
  "style-loader": "^0.23.1",
  "vue-loader": "^15.4.2",
  "vue-template-compiler": "^2.5.17",
  "webpack": "^4.23.1",
  "webpack-cli": "^3.1.2",
  "webpack-dev-server": "^3.1.10"
},
"dependencies": {
  "vue": "^2.5.17"
}
}
```
5. 别忘了新建.babelrc文件，这里安装的是babel 7版本,所以有所不同
``` json
{
"presets": ["@babel/preset-env"]  //babel 7开始不用env
}
```
6. 新建webpack.config.js,主要配置打包信息，如下
这里是一个基本的配置，只配置了打包css、js的规则，你也可以加入打包html、照片等规则；

``` javascript
let path=require("path");
const { VueLoaderPlugin } = require('vue-loader');
module.exports={
    entry:"./src/main.js",
    output:{
        path:path.join(__dirname,'./static/'),
        filename:'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.(js|jsx)$/,
                use:{
                    loader:'babel-loader'
                },
                //排除node_modules中的js文件 优化打包速度
                exclude: path.resolve(__dirname, './node_modules'),          
            }
        ]
    },
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js'
        }
    },
    plugin:[
      new VueLoaderPlugin()
    ],
    devServer:{
            //指定服务器 index.html 资源的根目录
            contentBase: path.join(__dirname,"/"),
            //设置端口号
            port:6000,   
        }
    }
```
7. 执行webpack-dev-server,项目便可以跑起来了；
8. 配置热更新;在运行过程中，更改任何代码会实现网页自动刷新
``` json
npm install --save html-webpack-plugin
```
 在webpack.config.js 中使用该插件
``` javascript
let path=require("path");
const { VueLoaderPlugin } = require('vue-loader');

const webpack = require('webpack');
const HtmlWebpackPlugin=require('html-webpack-plugin');

module.exports={
    entry:"./src/main.js",
    output:{
        path:path.join(__dirname,'./static/'),
        filename:'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.(js|jsx)$/,
                use:{
                    loader:'babel-loader'
                },
                //排除node_modules中的js文件 优化打包速度
                exclude: path.resolve(__dirname, './node_modules'),          
            }
        ]
    },
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js'
        }
    },
    plugin:[
      new VueLoaderPlugin(),
      
      new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            // 指定编译后生成的html文件名
            filename: 'index.html',
            // 需要处理的模板
            template: 'index.html',
            // 打包过程中输出的js、css的路径添加到html文件中
            // css文件插入到head中
            // js文件插入到body中，可能的选项有 true, 'head', 'body', false
            inject: true
          })
          
    ],
    devServer:{
            //指定服务器 index.html 资源的根目录
            contentBase: path.join(__dirname,"/"),
            //设置端口号
            port:6000,   
        }
    }
```
9. 在script脚本中添加dev命令
``` json
"scripts": {
"test": "echo \"Error: no test specified\" && exit 1",
"dev":"webpack-dev-server -open chrome"
}
```
10. npm run dev运行
