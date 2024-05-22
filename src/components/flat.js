import React from "react";
import styles from "./flat.module.css";

function Flat(props) {

  const style = {
    backgroundImage: `url('${props.flat.imageUrl}')`
  }
  return (
    <div className={styles.flat}>
      <div className={styles.flatPicture} style={style}></div>
      <div className={styles.flatTitle}>{`${props.flat.priceCurrency + props.flat.price} - ${props.flat.name}`}</div>
    </div>
  )
}

export default Flat;
