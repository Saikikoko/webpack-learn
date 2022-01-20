# webpack-learn
webpack学习测试用例

## ES6转ES5
~~~js
npm install babel-loader -D
~~~

~~~js
npm install @babel/core @babel/preset-env @babel/plugin-transform-runtime -D

npm install @babel/runtime @babel/runtime-corejs3
~~~

编写.babelrc配置文件

~~~js
{
    "presets": ["@babel/preset-env"],
    "plugins": [
        [
            "@babel/plugin-transform-runtime",
            {
                "corejs": 3
            }
        ]
    ]
}

~~~

## 引入html模板

~~~shell
npm install html-webpack-plugin -D 
~~~

结合config的骚操作


配置script

~~~shell
npm install cross-env -D
~~~

~~~json
{
    "scripts": {
        "dev": "cross-env NODE_ENV=development webpack",
        "build": "cross-env NODE_ENV=production webpack"
    }
}
~~~

## 在浏览器中实时预览

~~~shell
npm install webpack-dev-server -D
~~~

- 启用 quiet 后，除了初始启动信息之外的任何内容都不会被打印到控制台。这也意味着来自 webpack 的错误或警告在控制台不可见 ———— 我是不会开启这个的，看不到错误日志，还搞个锤子
- stats: "errors-only" ， 终端中仅打印出 error，注意当启用了 quiet 或者是 noInfo 时，此属性不起作用。 ————— 这个属性个人觉得很有用，尤其是我们启用了 eslint 或者使用 TS进行开发的时候，太多的编译信息在终端中，会干扰到我们。
- 启用 overlay 后，当编译出错时，会在浏览器窗口全屏输出错误，默认是关闭的。
- clientLogLevel: 当使用内联模式时，在浏览器的控制台将显示消息，如：在重新加载之前，在一个错误之前，或者模块热替换启用时。如果你不喜欢看这些信息，可以将其设置为 silent (none 即将被移除)。

## devtool

## 处理样式
webpack不能直接处理css样式，需要借助loader进行处理，普通的CSS样式需要借助style-loader、css-loader，考虑到兼容性问题，还需要借助postcss-loader，如果是处理less或者sass，则还要借助sass-loader和less-loader

~~~shell
npm install style-loader sass-loader css-loader postcss-loader autoprefixer less -D
~~~

- style-loader 动态创建 style 标签，将 css 插入到 head 中.
- css-loader 负责处理 @import 等语句。
- postcss-loader 和 autoprefixer，自动生成浏览器兼容性前缀 —— 2020了，应该没人去自己徒手去写浏览器前缀了吧
- sass-loader 负责处理编译 .sass 文件,将其转为 css

这里，我们之间在 webpack.config.js 写了 autoprefixer 需要兼容的浏览器，仅是为了方便展示。推荐大家在根目录下创建 .browserslistrc，将对应的规则写在此文件中，除了 autoprefixer 使用外，@babel/preset-env、stylelint、eslint-plugin-conmpat 等都可以共用

## 处理图片和字体文件

~~~shell
npm i -D url-loader
~~~

## 清空dist目录

~~~shell
npm i -D clean-webpack-plugin
~~~




