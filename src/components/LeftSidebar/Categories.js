import React from 'react';
import styles from './leftSide.module.css'
import upArrow from '../../icons/upArrow.svg'

export const Categories = () => {
    return <div className={styles.categories}>
        <div className={styles.heading}>
            <div>Categories</div>
            <img className={styles.arrowImg} src={upArrow} alt="arrow icon" />
        </div>
        <div className={styles.categoriesOptions}>
            <label className={styles.ctgLabels} key={1}>
                Flip Flops
                <input className={styles.ctgOpt} type="radio" name="ctgOpt" value="FlipFlops" />
                <span className={styles.checkmark}></span>
            </label>
            <label className={styles.ctgLabels} key={2}>
                Sneakers
                <input className={styles.ctgOpt} type="radio" name="ctgOpt" value="Sneakers" />
                <span className={styles.checkmark}></span>
            </label>
            <label className={styles.ctgLabels} key={3}>
                Lace-up Shoes
                <input className={styles.ctgOpt} type="radio" name="ctgOpt" value="LaceUpShoes" />
                <span className={styles.checkmark}></span>
            </label>
            <label className={styles.ctgLabels} key={4}>
                Shoe Accessories
                <input className={styles.ctgOpt} type="radio" name="ctgOpt" value="ShoeAccessories" />
                <span className={styles.checkmark}></span>
            </label>

        </div>
        
  </div>;
};
