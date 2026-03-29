import  React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

// import About from "./About/About";
// import Contact from "./Contact/Contact";
// import Products from "./Product/Products";
//import Home from "./Home/Home";
import history from './history';
import Customer from "./Customer/customer";
//import User from "./User/user";
import Category from "./category";
import Product from "./Product/product";
import Menu from "./Home/Menu";


 export default class Routes extends Component {
 render() {
//const Routes = (props) => {
    //e.preventDefault();
    return (
        
         <Router history ={history}>
       
            <Switch>
                <Route path="/" exact component={Menu} /> 
                <Route path="/Customer" component={Customer} />
                <Route path="/Category" component={Category} />
                <Route path="/Product" component={Product} /> 
                               
            </Switch>
           
        </Router>
    )
    // event.preventDefault();

    }
 }

 //export default Routes;
