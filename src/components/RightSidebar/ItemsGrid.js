import React from 'react';
import {shoes} from '../../utilities/dummyData'
import UnitItem from './UnitItem';
import styles from './RightSide.module.css'

const ItemsGrid = ({query}) => {
  let key = 0;
  const getKey = () => key++;
  
  const itemGrid = shoes.filter((obj) =>
  JSON.stringify(obj).toLowerCase().includes(query.toLowerCase())
).map((item) => {
    return (
      <UnitItem
        key={getKey()}
        name={item.name}
        brand={item.brand}
        img1={item.img1}
        img2={item.img2}
        img3={item.img3}
        price={item.price}
        categories={item.categories}
        size={item.size}
      />
    )
});
  
  return <div className={styles.itemGrid}>
    {itemGrid}
  </div>;
};

export default ItemsGrid;
