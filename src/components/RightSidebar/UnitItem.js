import React from 'react';
import styles from './RightSide.module.css'

const UnitItem = ({brand,name,img1,price,img2,img3}) => {
    return <div className={styles.itemCard}>
        <div className={styles.itemHeading}>
            <div className={styles.itemName}>
                {name}
            </div>
            <div className={styles.brand}>
                {brand}
            </div>            
        </div>
        <div className={styles.itemImage}>
            <img className={styles.image1} src={img1} alt="mainImg"></img>
        </div>
        <div className={styles.itemFooter}>
            <div className={styles.itemPrice}>
                <div className={styles.priceTitle}>
                    Price
                </div>
                ${price}
            </div>
            <div className={styles.footerImages}>
                <img className={styles.footerUnitImg} src={img2} alt="second img"></img>
                <img className={styles.footerUnitImg} src={img3} alt="third img"></img>
            </div>
        </div>
        
  </div>;
};

export default UnitItem;
