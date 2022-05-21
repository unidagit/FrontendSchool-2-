# 자바스크립트
* HTML은 콘텐츠와 골격, CSS는 웹페이지의 레이아웃, JavaScript는 웹페이지의 동작
    * ES1 ES2 ES3 (1997-1999)
    * ES5 (2009)
    * ES6 (2015)
    * ECMA-인터내셔널 공식 사이트 : https://www.ecma-international.org/
    * ES2015부터(ES5) `const`, `let`, `Promise`, `Arrow function`, `class` 등의 문법들이 대거 추가

## 환경 설정
* about:blank

## 자바스크립트 삽입위치
* head, body의 문서 처음, 중간, 끝
* 보통 body의 맨 끝
```js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1 id="one">hello world 1</h1>
    <h1 onclick="alert('hello')">hello world 2</h1>
    <script>
        document.getElementById('two').innerHTML = 'hello'
    </script>
    
    <h1 id="two">hello world 2</h1>
</body>
</html>
```

## 내부 스크립트와 외부 스크립트
```js
<script>
    console.log('hello')
</script>
```
```js
<script src="test.js"></script>
```

## JavaScript를 출력하는 4가지 방법
1. 문서 내에 요소를 선택하여 출력하는 방법(innerHTML, innerText 등)
2. 문서 내에 직접 출력하는 방법(write 등)
3. 사용자 인터렉션(alert, confirm 등)
4. 콘솔에 찍는 방법(console.log, console.table, console.error 등)

## 코드 구조
1. 문(statement)은 문법 구조(syntax structure, Values, Operators, Expressions, Keywords, and Comments)와 명령어(command) 등으로 이뤄짐, 문은 세미콜론으로 구분(세미콜론을 붙이지 않는 곳도 있습니다.)
2. 공백 병합
```js
let a = 10, 
        b = 20, 
        c = 30
        console
            .log(
                a, 
                b, 
                c,
            )
            //.a()
            //.b()
            //.c()
```
3. 주석
```js
// 한 줄 주석입니다.
/*
여러줄 주석입니다.
*/
```
4. 엄격모드
* ES5에서 최신의 문법들이 많이 추가가 되었는데 기존에 있었던 문법을 변경하는 문법도 나옴
* 이러한 문법들은 기존 코드의 문제를 불러일으킬 수 있기 때문에 use strict라는 지시자를 통해 엄격모드를 활성화 했을 때에만 반영
* class 문법의 경우 엄격 모드가 기본
* 함수별로 엄격모드를 다르게 적용할 수 있으나 혼란을 야기할 수 있습니다.
```js
"use strict";
// 코드
```

# 변수
* 변수 이름 규칙
    * 변수는 숫자로 시작할 수 없다.
    * 띄어쓰기가 안된다.
    * 예약어를 사용할 수 없다.(예약어가 사용 불가능한 것은 아닙니다.)
    * $, _를 제외한 특수문자를 사용하지 않는다.
    * 대소문자를 구분한다.
* var, let, const
    ```js
    if (true) {
        const testName = 'hojun'
        let testAge = 10
    }
    if (true) {
        var testName2 = 'hojun'
        var testAge2 = 10
    }
    ```
    * var(ES5 이전, 지금 사용 권장 X) : 전역변수, 재선언시 애러 X
    * let(ES5) : block scope, 재선언시 애러 O, 콘솔에서는 애러 X, 변경가능한 자료형
    * const(ES5) : block scope, 재선언시 애러 O, 콘솔에서는 애러 X, 변경이 불가능한 자료형(상수)

# 연산
* 산술연산(+, -, /, *, **, %)
* 논리연산(&&, ||, !, !!, &, |)
    * 참 -> true -> 1
    * 거짓 -> false -> 0
    * &&는 곱
    * ||는 합
    * !는 부정
    * 암기코드
    ```js
    for (let x = 0; x < 100; x++) {
        if(x % 3 == 0 || x % 5 == 0){
            console.log(x)
        }
    }
    ```
    ```js
    // 앞에 값이 널이냐를 확인하고 싶은 경우
    result1 = 10 || 100;
    result2 = 0 && 100;
    result3 = null || 100;
    result4 = null && 100;

    username = 'hojun';
    result5 = username || '유저 이름이 없습니다';

    username = undefined;
    result5 = username || '유저 이름이 없습니다';
    ```
* 비교연산(>, >=, <, <=, ==, !=, ===, !==)
* 단항연산자(++x, x++, --x, x--)
* ??(nullish 병합연산자)
    ```js
    let result1;
    let result2 = result1 ?? 100;
    
    let result3 = 10;
    let result4 = result3 ?? 100;
    ```
* ?(삼항연산자)
    ```js
    let x = true ? 10 : 100 
    let xx = false ? 10 : 100 
    ```

# 변수의 형
## 변수(타입, typeof로 확인 가능)
- 원시타입(primitive types) : number, string, boolean, null, undefined
- 참조타입(reference types) : object(object, array, map, set), function
- Number(숫자)
    * 형태 : 10, 10.123
    * 호출 : 변수명
    * 메서드 : 
        * num.toString는 없습니다. 이유는 무엇일까요? 소수점 때문에 그렇습니다.(JavaScript의 parsing때문이고, 아는 분이 많지는 않습니다.)
        * num.toFixed()
    * Number()
    * parseInt() - 권고, parseFloat()
    * Math
        * Math.PI
        * Math.max()
        * Math.min()
        * Math.floor()
        * Math.round()
        * Math.random()
        * Math.abs()
        * Math.sqrt()
        * Math.pow()
    * NaN
    * Infinity, -Infinity

- String(문자열)
    * 형태 : 'abcde', "abcde", `abcde ${변수명}`
    * 호출 : 변수명, 변수명[0] (변수명[index])
    * 메서드 : 
        * str.length
        * str.indexOf()
        * str.lastIndexOf()
        * str.includes()
        * str.split()
        * str.substring()
        * str.substr()
        * str.toLowerCase()
        * str.toUpperCase()
        * str.trim()
        * str.replace()
        * str.concat()

- Boolean(논리값)
    * 형태 : true, false
    * 호출 : 변수명
    * 어떤 것이 true이고 어떤 것이 false인지 판단할 수 있어야 합니다.(truthy, falsy -> 우리가 매우 깊이 다뤘던 내용입니다.)

- undefine : undefind
    * 형태 : let a, console.log(a)

- null : object
    * 형태 : let a = null

- Array(배열) : object
    * 형태 : ['하나', '둘', '셋'], [100, 200, 300],
    * 호출 : 변수명, 변수명[0], 변수명[0][0] (변수명[index])
    * 메서드 : 
        * length
        * forEach
        * map
        * filter
        * push / pop - mutable
        * slice - immutable
        * splice - mutable
        * reduce - immutable
        * join
        * indexOf
        * includes
        * find
        * concat
        * every
        * some
        * fill — mutable
        * shift — mutable
        * unshift — mutable
        * reverse — mutable
        * sort — mutable

- Object(객체)
    * 형태 : 
        ```javascript
        {
            "지역이름": "전국", // key : value(2개의 집합을 가리켜 객체 프로퍼티)
            "확진자수": 24889,
            "격리해제수": 23030,
            "사망자수": 438,
            "십만명당발생율": 48.0
        }
        ```
    * 호출 : 변수명, 변수명.지역이름, 변수명['지역이름'] (변수명.key, 변수명[key])
    * 수정, 삭제 : 
        - 수정 : value['hello'] = 'world', value['hello'] = null
        - 삭제 : delete value['hello']는 추천하지 않음(메모리 상에 'world'가 남아있음, value['hello'] = null을 권장)
    * 속성 : 
        ```js
        console.log(Object.getOwnPropertyDescriptor(person, 'name'));
        Object.getOwnPropertyDescriptors(person)
        // {10: {…}, name: {…}, age: {…}, height: {…}, weight: {…}, 이력: {…}}
        // value: '이호준',
        // writable: true, // 변경 가능 여부, 기본값 false
        // enumerable: true, // 열거(for) 가능 여부, 기본값 false
        // configurable: true // 재정의 가능 여부, 기본값 false
        ```
    * 메서드 : Object.keys, Object.values, Object..entries

- Map : object
    * 메서드 : set, get, has, delete, size
    ```js
    let map = new Map()
    map.set('one', 100)
    map.set('two', 200)
    map.set('three', 300)
    map.set('four', [10, 20])
    map.set(5, [100, 200])
    map.set([1, 2], [100, 200])
    map.get(5)

    let human = {
        name:'hojun3',
        age:30,
        local:'jeju'
    }
    let hojun = new Map(Object.entries(human))
    ```

- Set : object
    * 메서드 : add, has, delete, has, size
    * 중복을 허락하지 않는다
    * 합집합, 교집합, 차집합 등에 메서드가 있진 않지만, 이러한 합집합, 교집합, 차집합을 구현하기 위해 Set을 사용하는 경우기 많습니다.
    ```js
    let set = new Set()
    set.add(1);
    set.add(1);
    set.add(2);
    set.add(2);
    set.add(3);
    set.add(3);
    set.add(3);
    set.add(3);
    set.size
    // let set = new Set([1, 2, 3, 3, 3, 3])
    // let set = new Set('helllllllllo')
    ```