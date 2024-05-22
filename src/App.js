import React, { useState, useEffect } from 'react';
import Flat from './components/flat';
import Search from './components/search';
import GoogleMapReact from 'google-map-react';
import styles from './App.module.css';

function App() {
  const [flats, setFlats] = useState([]);
  const [filteredFlats, setFilteredFlats] = useState([]);
  const [userInput, setUserInput] = useState('');

  useEffect( () => {
    const url = "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json";
    // source: https://github.com/lewagon/flats-boilerplate/blob/master/flats.json
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setFlats(data);
        setFilteredFlats(data);
      })
  }, [])

  useEffect( () => {
    const filtered = flats.filter(flat => flat.name.toLowerCase().includes(userInput.toLowerCase()));
    setFilteredFlats(filtered);
  }, [flats, userInput])

  const defaultMapProps = {
    center: {
      lat: 48.8575,
      lng: 2.3514
    },
    zoom: 11
  };


  return (
    <div className={styles.app}>
      <div className={styles.main}>
        <div className={styles.search}>
          <Search userInput={userInput} collectInput={setUserInput} />
        </div>
        <div className={styles.flats}>
          {filteredFlats.map(flat => <Flat key={flat.id} flat={flat} />)}
        </div>
      </div>
      <div className={styles.map}>
        <GoogleMapReact
          // bootstrapURLKeys={{ key: /* API KEY HERE */ }}
          defaultCenter={defaultMapProps.center}
          defaultZoom={defaultMapProps.zoom}
        >
        </GoogleMapReact>
      </div>
    </div>
  );
}

export default App;
