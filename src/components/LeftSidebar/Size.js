import React from 'react';
import styles from './leftSide.module.css'

const Size = () => {
    let key = 0;
    const getKey=()=> key++;
    const sizeArray = [ 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48];
    const sizeGridBox = sizeArray.map((value) => {
        return (
            <label className={styles.sizeLabel} key={getKey()}>
                <input className={styles.sizeInput} type="checkbox" value={value}/>
                <span className={styles.sizeBox}>{value}</span>
            </label>
        )
    })
    return <div className={styles.size}>
        <div className={styles.heading}>Size</div>
        <div className={styles.sizeGrid}>
           {sizeGridBox}
        </div>
  </div>;
};

export default Size;
