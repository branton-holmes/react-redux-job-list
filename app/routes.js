import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AllJobs from './containers/AllJobs';
import About from './components/About';
import Favorites from './containers/Favorites';

export default (
	<Switch>
		<Route exact path="/about" component={About} />
		<Route path="/all_jobs" component={AllJobs} />
		<Route path="/favorites" component={Favorites} />
	</Switch>
);
