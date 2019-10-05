# React 공부

## 1. react 환경 설정

* node.js 설치
  * node -v, npm -v 확인
* npx 설치
  * npm install npx -g
* git 설치
  * git --version

* create-react-app 으로 환경구성
  * npx create-react-app 패키지명
  * 설치후 npm start

## 2. react

* ReactDOM을 통한 html 랜더링 처리.
  * 렌더링은 하나의 component만 가능함!!
  * 랜더링을 하는 Component가 다른 Component를 사용하여 동적으로 페이징 처리

* Component는 앞에 네이밍이 대문자로 시작해야 한다.

```javaScript
// function의 파일명 앞자리가 대문자.
function Food({fav}){
  console.log({fav});
  return <h1>I like {fav}</h1>
}
```

* Component에 속성 전달이 가능하다.

```javaScript
import React from 'react';

// App에서 호출한 Food component의 fav key를 사용
function Food({fav}){
  console.log({fav});
  return <h1>I like {fav}</h1>
}

function App() {
  return (
    <div>
      hello world
      <Food fav="kimchi"/>      // fav라는 key에 kimchi라는 value
      <Food fav="ramen"/>
      <Food fav="samgiupsal"/>
    </div>
  );
}

export default App;
```

* JSX를 통한 recat와 javascript의 조합
  * jsx는 javascript + html
