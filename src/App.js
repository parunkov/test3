import React from 'react';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import TerminalsContainer from'./components/Terminals/TerminalsContainer';
import BuyersContainer from './components/Buyers/BuyersContainer';
import BuyerContainer from './components/Buyer/BuyerContainer';
import Login from './components/Login/Login';
// import {Route, withRouter, Switch, Redirect} from 'react-router-dom';
import {Route, withRouter, Switch} from 'react-router-dom';
// import {initializeApp} from './redux/app-reducer';
// import { getFrends } from './redux/users-reucer';
import {connect} from 'react-redux';
// import Preloader from './components/common/Preloader/Preloader';
import {compose} from 'redux';
// import {withSuspense} from './hoc/withSuspense';
import store from './redux/store';
import {Provider} from 'react-redux';
import {HashRouter} from 'react-router-dom';

// const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
// const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      // menuShown: false,
      // windowWidth: window.innerWidth
    };
  }

  catchAllUnhandledErrors = (promiseRejectionEvent) => {
    // alert("Some error occured");
  }

  componentDidMount() {
     // this.props.initializeApp();
     // window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
     // const savedFrends = JSON.parse(localStorage.getItem('frends'));
     // this.props.getFrends(savedFrends ? savedFrends : []);
     // window.addEventListener("resize", this.updateWidth);
     // this.updateWidth();
  }

  componentWillUnmount() {
    // window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    // window.removeEventListener("resize", this.updateWidth);
  }

  // updateWidth = () => {
  //   // console.log('resize');
  //   this.setState({windowWidth: window.innerWidth});
  //   if (window.innerWidth > 700) {
  //     this.setState({menuShown: true});
  //   }
  // }

  // toggleMenu = () => {
  //   this.setState({menuShown: !this.state.menuShown});
  // }

  render() {

    // if (!this.props.initialized) {
    //   return <Preloader />
    // }

    return (
      // <BrowserRouter>
        <div className="app">
          {/*<Header menuShown={this.state.menuShown} toggleMenu={this.toggleMenu} />*/}
          <div className="app-wrapper">
            <Navbar />
            <div className="app-wrapper-content">
              <Switch>
                {/*<Route exact path="/" render={() => <Redirect to="/profile" />} />
                <Route path="/dialogs" render={withSuspense(DialogsContainer)} />
                <Route path="/profile/:userId?" render={withSuspense(ProfileContainer)} />*/}
                <Route path="/terminals" render={() => <TerminalsContainer />} />
                <Route exact path="/buyers" render={() => <BuyersContainer />} />
                <Route exact path="/buyers/id" render={() => <BuyerContainer />} />
                <Route path="/login" render={() => <Login />} />
                <Route path="*" render={() => <div>404 NOT FOUND</div>} />
              </Switch>
            </div>
          </div>
        </div>
      // </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => ({
  // initialized: state.app.initialized,
  // frends: state.usersPage.frends
});

const AppContainer = compose(
  withRouter,
  connect(mapStateToProps, {/*initializeApp, getFrends*/})
)(App);

const TestApp = (props) => {
  return(
    <HashRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </HashRouter>
  )
}

export default TestApp;