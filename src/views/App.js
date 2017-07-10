import React, { Component } from 'react';
import createBrowserHistory from 'history/createBrowserHistory';
import { Router, Route} from 'react-router';
import MHeader from 'components/m-header/m-header';
import Tab from 'components/tab/tab';
import RouterView from '../routers/router';
import './App.css';
const history = createBrowserHistory();
class App extends Component {
  render() {
    return (
      <div>
        <MHeader />
        {/*<Tab />
        <Router history={history}>
            {RouterView.map((route,i) => (
                <Route key={i} {...route} />
            ))}
        </Router>*/}
      </div>
    );
  }
}

export default App;
