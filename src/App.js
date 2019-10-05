import React from 'react';

function Food({fav}){
  console.log({fav});
  return <h1>I like {fav}</h1>
}

function App() {
  return (
    <div>
      hello world
      <Food fav="kimchi"/>
      <Food fav="ramen"/>
      <Food fav="samgiupsal"/>
    </div>
  );
}

export default App;
