import React, { useState } from 'react';
import Header from '../components/Header';
import LeftSideColumn from '../components/LeftSidebar/LeftSideColumn';
import RightSideColumn from '../components/RightSidebar/RightSideColumn';
import style from './dashboard.module.css';

const Dashboard = () => {
    const [query, setQuery] = useState("");
    const [categoryQuery, setCategoryQuery] = useState("");
    const [sizeQuery, setSizeQuery] = useState([]);

    // functions for passing down to the componenets to get value up the heirarchy
    const searchSubmit = (value) => {
        setQuery(value);
    }
    const categoryQuerySubmit = (value) => {
        setCategoryQuery(value);
    }
    const sizeQuerySubmit = (value) => {
        setSizeQuery(value);
    }

    return <div className={style.dashboard}>

        {/* APP HEADER */}
        <Header searchSubmit={searchSubmit} />

        {/* RIGHT AND LEFT COLUMNS */}
        <div className={style.body}>
            <LeftSideColumn categoryQuerySubmit={categoryQuerySubmit} sizeQuerySubmit={sizeQuerySubmit} sizeQuery={sizeQuery}/>
            <RightSideColumn query={query} categoryQuery={categoryQuery} sizeQuery={sizeQuery}/>
        </div>
        
    </div>;
};

export default Dashboard;
