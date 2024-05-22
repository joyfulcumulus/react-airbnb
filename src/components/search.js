import React from 'react';
import styles from "./search.module.css";

function Search() {
  return (
    <form className={styles.searchForm}>
      <input
        className={styles.searchBox}
        type="text"
        placeholder="Search for apartments"
        // value={}
        // onChange={}
      />
      <input
        type="submit"
        value="Submit"
      />
    </form>
  )
}

export default Search;
