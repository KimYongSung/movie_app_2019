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

## 2. React 정리

### 2.1 Component

* ReactDOM을 통한 html 랜더링 처리.
  * 렌더링은 하나의 component만 가능함!!
  * 랜더링을 하는 Component가 다른 Component를 사용하여 동적으로 페이징 처리

* Component Function은 앞에 네이밍이 대문자로 시작해야 한다.

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

* JSX를 통한 recat와 javascript의 조합으로 사용이 가능하다.
  * jsx는 javascript + html

```javaScript
function Food({name, picture}){
  console.log({name});
  return <div>
      <h1>I like {name}</h1>
      <img src={picture} alt={name}/>
    </div>
}

const foodILike = [
  { id:1, name: "kimbab", img: "http://recipe1.ezmember.co.kr/cache/recipe/2016/04/08/1d26c0444e724bca8ed271b24da0057a1.jpg" },
  { id:2, name: "suhise" , img: "http://recipe1.ezmember.co.kr/cache/recipe/2016/04/08/1d26c0444e724bca8ed271b24da0057a1.jpg"},
  { id:3, name: "bibimbab" , img: "http://recipe1.ezmember.co.kr/cache/recipe/2016/04/08/1d26c0444e724bca8ed271b24da0057a1.jpg"},
  { id:4, name: "samgusal" , img: "http://recipe1.ezmember.co.kr/cache/recipe/2016/04/08/1d26c0444e724bca8ed271b24da0057a1.jpg"}
];

function App() {
  return (
    <div>
      <h1>hello world</h1>
      {foodILike.map(dish => <Food key={dish.id} name={dish.name} picture={dish.img}/>)}
    </div>
  );
}
```

* 동적으로 jsx에 Rendenig이 가능하다.
  * React에서 동적인 리스트 생성시 **props.key**를 통하여 적절한 유니크 값을 지정해줘야 한다.
  * 키를 지정하지 않을 경우 배열의 인덱스를 기본 키로 사용함.
    * 기본 인덱스로 지정시 배열의 순서가 변경되거나 아이템을 추가/삭제 할 때 문제 발생함.
    * 키는 전역에서 고유할 필요 없이 컴포넌트와 관련 아이템 사이에서 고유값을 가져야 함.

* Component의 props 유효성 검사는 [propType](https://reactjs-kr.firebaseapp.com/docs/typechecking-with-proptypes.html)을 사용함.
  * npm i prop-types 으로 설치
  * Conmponet명.propTypes 에 속성 추가

```javaScript
Food.propTypes = {
  name : PropTypes.string.isRequired,
  picture : PropTypes.string.isRequired,
  rating : PropTypes.number
}
```

