import React from 'react';
import Flat from './components/flat';
import styles from './App.module.css';

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

  const flats = [flat, flat, flat, flat];

  return (
    <div className={styles.app}>
      <div className={styles.main}>
        <div className={styles.search}>Search Box</div>
        <div className={styles.flats}>
          {flats.map(flat => <Flat flat={flat} />)}
        </div>
      </div>
      <div className={styles.map}>
        Map Image
      </div>
    </div>
  );
}

export default App;
