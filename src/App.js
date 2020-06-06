import React from 'react';
import PropTypes from "prop-types";

function Food({name, rating}) {
  return (
    <div>
    <h1>I love {name}</h1>
    <h2>{rating}/5.0</h2>
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

const foodILike = [
  {id: 1, name: "kimchi", rating: 4},
  {id: 2, name: "ramen", rating: 3},
  {id: 3, name: "noodle", rating: 1}
];

function App() {
  return <div>
    {foodILike.map(dish => <Food key={dish.id} name={dish.name} rating={dish.rating} />)}
    </div>;
}

export default App;
