import React from 'react';
import ItemsGrid from './ItemsGrid';
import styles from './RightSide.module.css'
import SortDropdown from './SortDropdown';

const RightSideColumn = () => {
    return <div className={styles.container}>
        <div className={styles.header}>
            <div className={styles.title}>
                New Arrivals
            </div>
            <SortDropdown/>
        </div>
        <ItemsGrid/>
  </div>;
};

export default RightSideColumn;
