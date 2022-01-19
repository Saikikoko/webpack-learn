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
