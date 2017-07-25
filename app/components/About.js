import React from 'react';
import {about} from '../styles/jobList.scss';

const About = () =>
    <div className={about}>
        <h1>About</h1>
        <p>This is a basic example React application using Redux. It pulls a list of jobs from codepen.io to simulate
            using an external API to gather and display data. You can filter this data based on the job titles.</p>
        <p>You can also add jobs to a list of favorites, and view your list of favorites on the "Favorites" page. Favorites can be removed from either the "All jobs" or the "Favorites".</p>
        <p>Thanks for taking the time to check out my example application!</p>
        <h3>Branton Holmes</h3>
        <p>branton.holmes@gmail.com</p>
    </div>;


export default About;
