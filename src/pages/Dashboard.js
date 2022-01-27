import React from 'react';
import Header from '../components/Header';
import LeftSideColumn from '../components/LeftSidebar/LeftSideColumn';
import RightSideColumn from '../components/RightSidebar/RightSideColumn';
import style from './dashboard.module.css';

const Dashboard = () => {
    return <div className={style.dashboard}>
        <Header />
        <div className={style.body}>
            <LeftSideColumn />
            <RightSideColumn/>
        </div>
    </div>;
};

export default Dashboard;
