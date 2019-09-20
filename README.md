# Vue code scaffolding
scaffolding : 개발을 쉽게 시작할 수 있도록 기본 구조를 미리 짜놓는 것. 

<br>

## Project structure
```text
.
+-- config                                      Vue 설정 모듈
+-- docs                                        개발 문서
+-- public
|   +-- favicon.ico
|   +-- index.html
+-- src
|   +-- main.js
|   +-- App.vue
|   +-- assets      
|   |   +-- data          
|   |   |   +-- constants                       config 상수
|   |   |   |   +-- constants.default.js            기본 config  
|   |   |   |   +-- ....       
|   |   |   +-- constants.js                    config 통합 파일
|   |   |   +-- ...          
|   |   +-- images          
|   +-- components                              컴포넌트
|   +-- routes                                  라우터
|   +-- store                                   Vuex 상태 관리
|   |   +-- store.js
|   |   +-- mutations.js
|   |   +-- action.js
|   +-- views                                   페이지
|   +-- api                                     내부 구현 API
|   +-- lib                                     static 라이브러리
|   +-- utils                                   유틸리티
+-- .env.[MODE]                                 MODE별 환경변수   
+-- babel.config.js     
+-- package.json
+-- vue.config.js       Vue 설정 모듈을 가져와서 BUILD_TYPE별로 설정 
+-- README.md
```

<br>

## Coding convention
[Coding convention : 자주 보고 자주 생각할 것!!](./docs/coding_conventions.md)

<br>

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).



<br>

## Coding convention
[Coding convention : 자주 보고 자주 생각할 것!!](./docs/coding_conventions.md)

## Update history
### branches
- master  
    - [~2019.09.19] initial commit.  
    - [~2019.09.19] [Dynamic Import : Use babel-plugin-syntax-dynamic-import](#babel-plugin-syntax-dynamic-import)  
    - [2019.09.20] branch 분기 
    
- develop  
    
- feature-1  
    - [2019.09.20] [Coding Convention 추가](./docs/coding_conventions.md)   
    - [2019.09.20] 폴더 구조 설계  
        - config/env 추가
        - views에 페이지 구성
        - components에 샘플 컴포넌트 추가   
    


<br>

#### babel-plugin-syntax-dynamic-import
Dynamic Import를 사용하기 위한 두가지 방법 중 require.ensure 방식이 아닌 import 방식을 사용할 경우 바벨 플러그인을 사용해야한다.   
웹팩에서 지원하는 babel-plugin-syntax-dynamic-import를 설치한다.
[babel-plugin-syntax-dynamic-import](https://babeljs.io/docs/en/babel-plugin-syntax-dynamic-import/#installation)   

Install dependencies
```
npm install babel-plugin-syntax-dynamic-import --save-dev
```

babel.config.js       
```
  module.exports = {
    presets: [
      '@vue/app'
    ],
    plugins: [
      "babel-plugin-syntax-dynamic-import"
    ]
  }
```

