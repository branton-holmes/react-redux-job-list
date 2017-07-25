import React from 'react';
import { Link } from 'react-router-dom';
import { sideBar, main } from '../styles/jobList.scss';
import Routes from '../routes';

const App = () =>
    <div>
        <div className={sideBar}>
            <Link to="/about">About</Link>
            <Link to="/all_jobs">All Jobs</Link>
            <Link to="/favorites">Favorites</Link>
        </div>
        <div className={main}>
            { Routes }
        </div>
    </div>;

export default App;
