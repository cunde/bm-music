import React from 'react';
import {Router,Route,Switch,Redirect} from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';


// NOTE: starting page引入
import HomePage from '../views/App';

const history = createBrowserHistory();
// NOTE: ending
export default (
    <Router history={history}>
        <Switch>
            <Route exact={true} path='/' component={HomePage} />

            <Redirect from='*' to='/'  />
        </Switch>
    </Router>
)
