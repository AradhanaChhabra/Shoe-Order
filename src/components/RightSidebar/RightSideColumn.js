import React from 'react';
import ItemsGrid from './ItemsGrid';
import styles from './RightSide.module.css'
import SortDropdown from './SortDropdown';

const RightSideColumn = ({query,categoryQuery,sizeQuery}) => {
    return <div className={styles.container}>
        <div className={styles.header}>
            <div className={styles.title}>
                New Arrivals
            </div>
            <SortDropdown/>
        </div>
        <ItemsGrid query={query} categoryQuery={categoryQuery} sizeQuery={sizeQuery}/>
  </div>;
};

export default RightSideColumn;
