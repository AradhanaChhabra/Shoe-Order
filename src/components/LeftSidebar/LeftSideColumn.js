import React from 'react';
import { Categories } from './Categories';
import PriceRange from './PriceRange';
import Size from './Size.js'
import { Remaining } from './Remaining';
import styles from './leftSide.module.css'

const LeftSideColumn = ({categoryQuerySubmit,sizeQuerySubmit,sizeQuery}) => {
    return <div className={styles.container}>
        {/* LEFT COLUMN SECTIONS */}
        <Categories categoryQuerySubmit={categoryQuerySubmit}/>
        <PriceRange />
        <Size sizeQuerySubmit={sizeQuerySubmit} sizeQuery={sizeQuery}/>
        <Remaining/>
    </div>;
    
};

export default LeftSideColumn;
