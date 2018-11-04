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
                use: [ 'style-loader', 'css-loader' ] //简写
            },
            {
                test: /\.(js|jsx)$/,
                use:{
                    loader:'babel-loader'   //完整写法
                },
                exclude: path.resolve(__dirname, './node_modules'),//排除node_modules中的js文件 优化打包速度
            },
            //解析.vue文件
            {
                test: /\.vue$/,
                use:['vue-loader']
            }
        ]
    },
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js'
        }
    },
    plugins: [
        new VueLoaderPlugin(),
    ],
    devServer:{
        contentBase: path.join(__dirname,"/"),  //指定服务器 index.html 资源的根目录
        port:8845,                              //设置端口号
        host:'localhost',                       //设置主机
        inline:true,                            //开启inline 我们保存完服务器端代码后，不需要再次运行命令即可刷新网页查看新效果
        hot:true        
    }
}