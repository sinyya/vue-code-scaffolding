# Coding conventions

## Variable
### 변수명 규칙
- 변수명은 낙타표기법(camelCase)을 사용한다. 
- 소문자로 시작하며 새로운 단어의 첫 번째 문자는 대문자로 사용한다.
- 변수의 첫 단어는 반드시 명사로 사용한다.
- 상수의 경우 모든 문자를 대문자로 사용하며 단어 사이에 밑줄을 넣어준다.  

```javascript
var variableLikeThis = '',
    CONSTANTS_LIKE_THIS = 0
```

<br>

## Function
### 함수명 규칙
- 함수명은 낙타표기법(camelCase)을 사용한다. 
- 소문자로 시작하며 새로운 단어의 첫 번째 문자는 대문자로 사용한다.
- 함수의 첫 단어는 반드시 동사로 사용한다.  

    ```javascript
    function getName() {
        
    }
    ```

### 함수 작성 규칙
- 같은 기능이 중복 되는 경우 함수로 작성한다.

<br>

## Syntax 
### String
- String 문자열은 Single Quotes(')을 사용한다. 
- 보간 기능이 필요한 경우 백틱(`)을 사용한다.
- HTML TAG의 속성값과 JSON Data의 key, value는 Double Quotes(")을 사용한다.  

```javascript
var name = '홍길동',
    str = `내 이름은 ${name}입니다.`
```
```html
<div class="container"></div>
```

<br>

## Data 
### data format
- 기본 데이터 규격은 JSON을 사용한다. 
- 외부 앱과 연동 시 JSON 형태로 데이터를 주고 받을 수 있다.

```json
{
  "propertyName": "propertyValue"
}
```

<br>

## Comments
### single line comments
1줄 주석에는 ```//```를 사용한다.
### multi line comments
여러줄 주석에는 ```/* ... */```를 사용한다.
### function comments
함수 주석은 ```/** ... */```를 사용하며 설명과 버전, 작성일, 작성자, 연관 위치, 모든 파라메터, 반환값에 대한 형이나 값 등을 기술한다.  

```javascript
/**
 * Takes 2 numbers and returns their sum.
 *
 * @version 1.0
 * @since 2019.09.27
 * @author hyeshin2530
 * 
 * @param   {Number} a      the first number
 * @param   {Number} b      the second number
 * @param   {Object} log      the log object
 * <br>         - {Object} info  - the info object
 * <br>             -- {String} msg  - the log message 
 *
 * @returns {number} the sum of a and b
 */
function addNumbers(a, b, log) {
  console.log(log.info.msg);
  return a + b;
}
```
