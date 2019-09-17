# vue-code-scaffolding

scaffolding : 개발을 쉽게 시작할 수 있도록 기본 구조를 미리 짜놓는 것. 

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

<br>

## Work contents
- [Dynamic Import : Use babel-plugin-syntax-dynamic-import](#babel-plugin-syntax-dynamic-import)

<br>

#### babel-plugin-syntax-dynamic-import
Dynamic Import를 사용하기 위한 두가지 방법 중 require.ensure 방식이 아닌 import 방식을 사용할 경우 바벨 플러그인을 사용해야한다.   
웹팩에서 지원하는 babel-plugin-syntax-dynamic-import를 설치한다.
[babel-plugin-syntax-dynamic-import](https://babeljs.io/docs/en/babel-plugin-syntax-dynamic-import/#installation)   

Install dependencies
```
npm install babel-plugin-syntax-dynamic-import --save-dev
```

.babelrc       
```
  "plugins": [
    "babel-plugin-syntax-dynamic-import"
  ]
```

webpack.config.js
```
resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': path.resolve(__dirname, 'src'),
    },
    extensions: ['*', '.js', '.vue', '.json']
},
```

