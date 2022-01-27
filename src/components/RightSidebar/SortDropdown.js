import React from 'react';
import styles from './RightSide.module.css'

const SortDropdown = () => {
  return <div>
    <div className={styles.dropdown}>
      <button className={styles.dropDownBtn}>Sort by Price</button>
      <div className={styles.dropdownContent}>
        <option>Low to High</option>
        <option>High to Low</option>
      </div>
    </div>
  </div>;
};

export default SortDropdown;
