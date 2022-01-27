import React from 'react';
import styles from './leftSide.module.css'

const Size = ({ sizeQuerySubmit, sizeQuery }) => {
    let key = 0;
    const getKey = () => key++;
    let sizeQ =[...sizeQuery];
    const sizeArray = ["35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48"];
    // if array contains element then remove, else add
    const sizeChangeHandler = (e) => {
        if(sizeQ.includes(e.target.value))
        { 
            sizeQ.splice(sizeQ.indexOf(e.target.value), 1);
        } else {
           sizeQ.push(e.target.value) ;
        }
        sizeQuerySubmit(sizeQ);
    }
    const sizeGridBox = sizeArray.map((value) => {
        return (
            <label className={styles.sizeLabel} key={getKey()}>
                <input className={styles.sizeInput} type="checkbox" value={value} onChange={sizeChangeHandler}/>
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
