import React, { useState } from 'react';
import styles from "./search.module.css";

function Search({userInput, collectInput}) {

  return (
    <form>
      <input
        className={styles.searchBox}
        type="text"
        placeholder="Search for apartments"
        value={userInput}
        onChange={ (event) => {collectInput(event.target.value)} }
      />
    </form>
  )
}

export default Search;
