import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Airedale from './Airedale.jpg'
import Beagle from './Beagle.jpg'
import Bulldog from './Bulldog.jpg'
import Golden from './Golden.jpg'

const root = ReactDOM.createRoot(document.getElementById('root'));

var dogs = [
  {
    image: Airedale,
    name: "Airedale"
  },
  {
    image: Beagle,
    name: "Beagle"
  },
  {
    image: Bulldog,
    name: "Bulldog"
  },
  {
    image: Golden,
    name: "Golden"
  }
]

function Pet(props) {
  return (
      <div className="container">
        <img src={props.image}></img>
        <p>{props.name}</p>
      </div>
  )
}
root.render(
  <div className="gallery">
    {
      dogs.map(function (item) {
        return (
          <div>
            <Pet image={item.image} name={item.name}></Pet>
            <Pet image={item.image} name={item.name}></Pet>
          </div>
        )
      })
    }
  </div>
);



