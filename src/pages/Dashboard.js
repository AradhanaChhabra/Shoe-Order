import React, { useState } from 'react';
import Header from '../components/Header';
import LeftSideColumn from '../components/LeftSidebar/LeftSideColumn';
import RightSideColumn from '../components/RightSidebar/RightSideColumn';
import style from './dashboard.module.css';

const Dashboard = () => {
    const [query, setQuery] = useState("");
    const [categoryQuery, setCategoryQuery] = useState("");
    const searchSubmit = (value) => {
        setQuery(value);
    }
    const categoryQuerySubmit = (value) => {
        setCategoryQuery(value);
    }
    return <div className={style.dashboard}>
        <Header searchSubmit={ searchSubmit}/>
        <div className={style.body}>
            <LeftSideColumn categoryQuerySubmit={categoryQuerySubmit}/>
            <RightSideColumn query={query} categoryQuery={categoryQuery}/>
        </div>
    </div>;
};

export default Dashboard;
