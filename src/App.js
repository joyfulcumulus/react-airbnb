import React, { useState, useEffect } from 'react';
import Flat from './components/flat';
import styles from './App.module.css';

function App() {
  const [flats, setFlats] = useState([]);

  useEffect( () => {
    const url = "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json";
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setFlats(data);
      })
  }, [])

  return (
    <div className={styles.app}>
      <div className={styles.main}>
        <div className={styles.search}>Search Box</div>
        <div className={styles.flats}>
          {flats.map(flat => <Flat key={flat.id} flat={flat} />)}
        </div>
      </div>
      <div className={styles.map}>
        Map Image
      </div>
    </div>
  );
}

export default App;
