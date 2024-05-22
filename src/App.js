import React from 'react';
import Flat from './components/flat';
import './App.css';

function App() {
  const flat = {
    "id": 148,
    "name": "Trendy Apt in Buttes Montmartre",
    "imageUrl": "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat2.jpg",
    "price": 200,
    "priceCurrency": "EUR",
    "lat": 48.885707,
    "lng": 2.343543
  };

  return (
    <div>
      <Flat flat={flat}/>
    </div>
  );
}

export default App;
