// import React from 'react';
// import './App.css';
// //import Navigation from './components/Navbar';
// //import Routes from './Routes';
// import Navigation from './components/Navbar';

// function App() {
//   return (
//     <div className="App">
//       <Navigation />
//       <Routes />
//     </div>
//   );
// }

// export default App;
import React, { Component } from 'react'
import Register from './auth/register'
import Login from './auth/login'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ProtectedRouter from './auth/protected'
import Home from './auth/home'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Routes from './auth/Routes'
import Product from './auth/Product/product' 
import Customer from './auth/Customer/customer'
import Category from './auth/category'
import Logout from './auth/logout' 
import Cart from './auth/Cart/cart' 
const App = () => {


  return (
    <div>
                
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      <ProtectedRouter exact path = "/home" component ={Home} />
      <ProtectedRouter exact path = "/product" component ={Product} />
      <ProtectedRouter exact path = "/Customer" component ={Customer} />
      <ProtectedRouter exact path = "/Category" component ={Category} />
      <ProtectedRouter exact path = "/Cart" component ={Cart} />
      <Route exact path = "/Logout" component ={Logout} />
     

      </Switch>
      </BrowserRouter>
      

      <ToastContainer/>
    </div>
  )
}

export default App;