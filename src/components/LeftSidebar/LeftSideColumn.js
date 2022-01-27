import React from 'react';
import { Categories } from './Categories';
import PriceRange from './PriceRange';
import Size from './Size.js'
import { Remaining } from './Remaining';
import styles from './leftSide.module.css'

const LeftSideColumn = ({categoryQuerySubmit}) => {
    return <div className={styles.container}>
        <Categories categoryQuerySubmit={categoryQuerySubmit}/>
        <PriceRange />
        <Size />
        <Remaining/>

    </div>;
    
};

export default LeftSideColumn;
