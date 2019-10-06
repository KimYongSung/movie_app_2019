import React from 'react';
import PropTypes from 'prop-types';

function Food({ name, picture, rating }) {
  console.log({ name });
  return <div>
    <h1>I like {name}</h1>
    <img src={picture} alt={name} />
    <h4>{rating} / 5</h4>
  </div>
}

const foodILike = [
  { 
    id: 1,
    name: "kimbab", 
    img: "http://recipe1.ezmember.co.kr/cache/recipe/2016/04/08/1d26c0444e724bca8ed271b24da0057a1.jpg" ,
    rating: 5
  },
  { 
    id: 2,
    name: "suhise", 
    img: "http://recipe1.ezmember.co.kr/cache/recipe/2016/04/08/1d26c0444e724bca8ed271b24da0057a1.jpg" ,
    rating: 5
  },
  { 
    id: 3, 
    name: "bibimbab", 
    img: "http://recipe1.ezmember.co.kr/cache/recipe/2016/04/08/1d26c0444e724bca8ed271b24da0057a1.jpg" ,
    rating: 5
  },
  { 
    id: 4, 
    name: "samgusal", 
    img: "http://recipe1.ezmember.co.kr/cache/recipe/2016/04/08/1d26c0444e724bca8ed271b24da0057a1.jpg" ,
    rating: 5
  }
]

Food.propTypes = {
  name : PropTypes.string.isRequired,
  picture : PropTypes.string.isRequired,
  rating : PropTypes.number
}

function App() {
  return (
    <div>
      <h1>hello world</h1>
      {foodILike.map(dish => <Food key={dish.id} name={dish.name} picture={dish.img} rating={dish.rating}/>)}
    </div>
  );
}

export default App;
