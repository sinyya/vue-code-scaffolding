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
|   +-- router                                  라우터
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

<br>

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
        - 폴더 구조 생성  
        - config/env 추가
        - views에 페이지 구성
        - components에 샘플 컴포넌트 추가   
    - [2019.09.22] Vuex 추가
        - [상수 변수 관리 로직 추가](#constants)
        - store.js 추가
        - store 샘플 로그 추가
    - [2019.09.23] [Vuex 주석 추가](#vuex)
        - store.js 주석 추가
        - mutations.js 주석 추가
        - action.js 주석 추가
        
- feature-2
    - [2019.09.24] npm script 수정
    - [2019.09.24] coding convention 함수 작성 규칙 추가
    - [2019.09.27] coding convention 주석 규칙 및 예제 수정
    - [2019.10.23] coding convention 주석 예제 수정

- feature-3
    - [2019.10.23] [Webpack resolve.alias](#webpack-resolvealias) 내용 추가 
    - [2019.10.23] [Dynamic import](#dynamic-import) 예제 추가 

- feature-4
    - [2019.10.30] Axios 모듈 추가 
    - [2019.10.30] constants 개선 
    - [2019.10.30] API 스캐폴딩
    
- feature-5
    - [2019.11.05] css background static url 처리 샘플 추가 

<br>

### Work Contents

#### Webpack resolve.alias
webpack ```resolve.alias```에는 기본적으로 '@'에 대해 src폴더를 바라보도록 설정 되어 있다.
이것을 이용해 다른 모듈을 불러올 때 상대경로가 아닌 절대경로로 불러올 수 있다.

src/router/index.js
```
// components
const Home = () => import('@/views/Home.vue');
const Login = () => import('@/views/Login.vue');
const Page404 = () => import('@/views/Page404.vue');
```

<br>

#### Dynamic import
요소를 동적으로 로딩하기 위해서 Dynamic import 모듈을 추가한다.  
아래 예제에서 logoFileName 데이터 값이 바뀌면 동적으로 이미지를 로딩한다.  
[babel-plugin-syntax-dynamic-import](https://babeljs.io/docs/en/babel-plugin-syntax-dynamic-import/#installation)   


##### Installation
```
npm install --save-dev @babel/plugin-syntax-dynamic-import
```

##### Usage  
babel.config.js
```
module.exports = {
  presets: [
    '@vue/app'
  ],
  plugins: [
    "@babel/plugin-syntax-dynamic-import"
  ]
};
```

src/components/EtcSample.vue
```
<template>
  <div>
    <img :src="logoUrl" alt="Logo">
    <img :src="require(`@/assets/images/${logoFileName}`)" alt="Logo">
  </div>
</template>

<script>
  export default {
    name : 'Logo',
    data() {
      return {
        logoUrl : require('@/assets/images/logo.png'),
        logoFileName : 'logo.png'
      }
    }
  }
</script>
```

<br>

#### Constants
config 상수 파일 설정
1. 고유 key 값을 정한 후 /src/assets/data/constants/ 위치에 constants.[key].js 파일을 생성한다.  
    -  [주의] /src/assets/data/constants/constants.*.js 파일에 정의된 모든 키값은 동일해야 한다.  
    
        constants.constant1.js
         ```javascript
        export default Object.freeze({
            NAME: "constant1"
        })
         ```
         constants.constant2.js
          ```javascript
         export default Object.freeze({
             NAME: "constant2"
         })
          ```
2. /src/assets/data/constants.js 에 해당 config를 추가한다.
3. config 상수는 vuex store.state.CONSTANTS에 저장한다.

<br>

#### Vuex
Vue.js의 상태관리를 위한 패턴이자 라이브러리.  
컴포넌트 간의 통신이나 데이터 전달을 좀 더 유기적으로 관리할 필요성이 생긴다.      
모든 데이터 통신 (state)을 한 곳에서 중앙 집중식으로 관리한다.

![vuex-diagram](./docs/image/vuex-diagram.png)

- store : 컴포넌트 간 공유될 data
- matations : Vuex의 데이터(state) 값을 변경하는 로직
- actions: 비 순차적 또는 비동기 처리 로직들을 선언

참고 : https://joshua1988.github.io/web-development/vuejs/vuex-start/
