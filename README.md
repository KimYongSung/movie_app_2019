# React 공부

## 1. react 환경 설정

* node.js 설치
  * node -v, npm -v 확인

* npx 설치
  * npm install npx -g

* create-react-app 으로 환경구성
  * npx create-react-app 패키지명
  * 설치후 npm start

## 2. JSX & Props

* ReactDOM을 통한 html 랜더링 처리.
  * 렌더링은 하나의 component만 가능함!!
  * 랜더링을 하는 Component가 다른 Component를 사용하여 동적으로 페이징 처리

```javaScript
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

/* index.html에 존재하는 ReactDOM에 의해 랜더링 될 div id를 설정 */
ReactDOM.render(<App />, document.getElementById('root'));
```

```html
<div id="root"></div> <!-- index.html에 존재하는 ReactDOM에 의해 랜더링 될 div-->
```

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

* 동적으로 jsx에 Rendenig이 가능하다.
  * React에서 동적인 리스트 생성시 **props.key**를 통하여 적절한 유니크 값을 지정해줘야 한다.
  * 키를 지정하지 않을 경우 배열의 인덱스를 기본 키로 사용함.
    * 기본 인덱스로 지정시 배열의 순서가 변경되거나 아이템을 추가/삭제 할 때 문제 발생함.
    * 키는 전역에서 고유할 필요 없이 컴포넌트와 관련 아이템 사이에서 고유값을 가져야 함.

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
      // 동적인 리스트에는 key를 통하여 유니크 값 지정이 필요함.
      {foodILike.map(dish => <Food key={dish.id} name={dish.name} picture={dish.img}/>)} 
    </div>
  );
}
```

* Component의 props 유효성 검사는 [propType](https://reactjs-kr.firebaseapp.com/docs/typechecking-with-proptypes.html)을 사용함.
  * 설치 명령어 : npm i prop-types
  * Conmponet명.propTypes 에 속성 추가

```javaScript
Food.propTypes = {
  name : PropTypes.string.isRequired,
  picture : PropTypes.string.isRequired,
  rating : PropTypes.number
}
```

## 3. State

* class component React의 Component를 상속받아야 한다.
  * React는 class component의 render method를 자동으로 실행.
  * class component는 **state**라고 한다.

```javaScript
import React from 'react';

class App extends React.Component{

  state = {
    count: 0
  };

  render(){
    return <h1>The number is : {this.state.count}</h1>
  }
}
```  

* react에서 button tag는 자동으로 onClick를 지정한다.
  * TODO: 자동으로 처리해주는 이벤트에 대한 정리 필요.

* React는 state를 직접 변경시 render를 refresh하지 않는다.  
* setState를 호출할때만 render를 refresh 한다.
* React는 **setState를 호출할 때 현재 state를 사용가능하게끔 제공**함.
* **this.state**를 직접 사용하는 방법은 외부 상태에 의존적이 되므로 권장하지 않음.

```javaScript
class App extends React.Component{
  
  state = {
    count: 0
  };

  add = ()=>{
    // this.state를 사용하는 방법은 외부 상태에 의존적이 되므로 권장하지 않음.
    // bad
    // this.setState({count: this.state.count +1});
    // good
    this.setState(current => ({count: current.count + 1}));
  };
  minus = ()=>{
    // bad
    // this.setState({count: this.state.count -1});
    // good
    this.setState(current => ({count: current.count - 1}));
  };

  render(){
    return (<div>
              <h1>The number is : {this.state.count}</h1>
              <button onClick={this.add}>Add</button>
              <button onClick={this.minus}>Minus</button>
            </div>
    );
  }
}
```

### 3.1 Component Life Cycle

* React.component는 [Life Cycle](https://ko.reactjs.org/docs/react-component.html#the-component-lifecycle) 존재함.

#### 3.1.1 마운트 ( mount )

* 컴포넌트의 인스턴스가 생성되어 DOM 상에 삽입될 때에 순서대로 호출됨.
  * constructor()
  * static getDerivedStateFropProp()
  * render()
  * componentDidMount()  

#### 3.1.2 업데이트 ( update )

* props 또는 state가 변경되면 갱신이 발생됨. 컴포넌트가 다시 렌더링될 때 순서대로 호출
  * static getDerivedStateFromProps()
  * shouldComponentUpdate()
  * render()
  * getSnapshotBeforeUpdate()
  * componentDidUpdate()

#### 3.1.3 마운트 해제 ( unmount )

* 컴포넌트가 DOM 상에서 제거될 때에 호출됨.
  * componentWillUnmount()

```javaScript
class App extends React.Component{

  constructor(props){
    super(props);
    // 첫번째 호출
    console.log("hello");
  }
  
  state = {
    count: 0
  };

  add = ()=>{
    this.setState(current => ({count: current.count + 1}));
  };
  minus = ()=>{
    this.setState(current => ({count: current.count - 1}));
  };

  componentDidUpdate(){
    // update 이후 호출
    console.log("I just updated");
  };

  componentDidMount(){
    // mount 이후 호출
    console.log("component rendered");
  };

  componentWillUnmount(){
    // component 종료시
    console.log("goodbye");
  };

  render(){
    // 두번째 호출
    console.log("I'm rendering");
    return (<div>
              <h1>The number is : {this.state.count}</h1>
              <button onClick={this.add}>Add</button>
              <button onClick={this.minus}>Minus</button>
            </div>
    );
  }  
}
```
