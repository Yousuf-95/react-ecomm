import React from 'react';
import { Switch, Route} from 'react-router-dom';
import './App.css';
import  HomePage  from './Pages/Homepage/homepage-component';
import  ShopPage from './Pages/Shop/shop-component';
import SignInAndSignUpPage from './Pages/Sign-in-sign-up/sign-in-sign-up-component';
import Header from './Components/header-component';


function App() {
  return (
    <div>
    <Header />
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/shop' component={ShopPage} />
      <Route path='/signin' component={SignInAndSignUpPage} />
    </Switch>
    </div>
  );
}

export default App;
