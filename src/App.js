import React from 'react';
import { Switch, Route} from 'react-router-dom';
import './App.css';
import  HomePage  from './Pages/Homepage/homepage-component';
import  ShopPage from './Pages/Shop/shop-component';
import SignInAndSignUpPage from './Pages/Sign-in-sign-up/sign-in-sign-up-component';
import Header from './Components/header-component';
import {auth} from './firebase/firebase-config';


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged( user => {
      this.setState({ currentUser: user });
      console.log(this.unsubscribeFromAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  
  render() {
    return (
      <div>
      <Header currentUser = {this.state.currentUser} />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignUpPage} />
      </Switch>
      </div>
    );
  }  
}

export default App;
