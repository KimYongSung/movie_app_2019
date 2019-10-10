import React from 'react';
import PropTypes from 'prop-types';

// class component는 state
class App extends React.Component{
  
  state = {
    count: 0
  };

  add = ()=>{
    // this.state를 사용하는 방법은 외부 상태에 의존적이 되므로 권장하지 않음.
    // bed
    // this.setState({count: this.state.count +1});
    // good
    this.setState(current => ({count: current.count + 1}));
  };
  minus = ()=>{
    this.setState(current => ({count: current.count - 1}));
  };

  // React는 state를 직접 변경시 render를 refresh하지 않는다.
  // setState를 호출할때만 render를 refresh 한다.
  // React는 setState를 호출할 때 현재 state를 사용가능하게끔 제공함.
  // this.state를 사용하는 방법은 외부 상태에 의존적이 되므로 권장하지 않음.
  render(){
    return (<div>
              <h1>The number is : {this.state.count}</h1>
              <button onClick={this.add}>Add</button>
              <button onClick={this.minus}>Minus</button>
            </div>
    );
  }  
}

export default App;
