import React from 'react';
import {shoes} from '../../utilities/dummyData'
import UnitItem from './UnitItem';
import styles from './RightSide.module.css'

const ItemsGrid = ({query,categoryQuery,sizeQuery}) => {
  let key = 0;
  const getKey = () => key++;
  
  // this function checks if the data item contains size in the sizeQueryArray
  const checkSize = (obj) => {
    for (let i = 0; i < sizeQuery.length; i++){
      if (obj.size !== undefined && obj.size.filter(
        (s) => parseInt(s) === parseInt(sizeQuery[i])
      ).length!==0)
        return true;
      }
      return false;
  }
  
  // first filter for category and then the search keyword
  const itemGrid = shoes
    .filter((obj) => categoryQuery !== "" ? obj.categories === categoryQuery : true)
    .filter(obj =>sizeQuery.length!==0?checkSize(obj):true)
    .filter((obj) => JSON.stringify(obj).toLowerCase().includes(query.toLowerCase()))
    .map((item) => {
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
  
  return <>
    {itemGrid.length !== 0 ? <div className={styles.itemGrid}>{itemGrid}</div> : <div className={styles.error}>
          <div>Nothing Found! Try something else or refresh.</div>
      </div>
      }
  </>
};

export default ItemsGrid;
