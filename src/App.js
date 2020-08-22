import React from 'react';
import './App.scss';
import NavbarContaiter from './components/Navbar/NavbarContaiter';
import TerminalsContainer from'./components/Terminals/TerminalsContainer';
import BuyersContainer from './components/Buyers/BuyersContainer';
import BuyerContainer from './components/Buyer/BuyerContainer';
import LoginContainer from './components/Login/LoginContainer';
import {Route, Switch, Redirect} from 'react-router-dom';
import store from './redux/store';
import {Provider} from 'react-redux';
import {HashRouter} from 'react-router-dom';

const App = () => {
  return (
      <div className="app">
        <div className="app-wrapper">
          <NavbarContaiter />
          <div className="app-wrapper-content">
            <Switch>
              <Route exact path="/" render={() => <Redirect to="/terminals" />} />
              <Route path="/terminals" render={() => <TerminalsContainer />} />
              <Route exact path="/buyers" render={() => <BuyersContainer />} />
              <Route exact path="/buyers/id" render={() => <BuyerContainer />} />
              <Route path="/login" render={() => <LoginContainer />} />
              <Route path="*" render={() => <div>404 NOT FOUND</div>} />
            </Switch>
          </div>
        </div>
      </div>
  );
}

const RoutedApp = (props) => {
  return(
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  )
}

export default RoutedApp;