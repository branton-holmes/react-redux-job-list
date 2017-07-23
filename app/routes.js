import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AllJobs from './containers/AllJobs';
import About from './components/About';

export default (
	<Switch>
		<Route exact path="/about" component={About} />
		<Route path="/all_jobs" component={AllJobs} />
	</Switch>
);
