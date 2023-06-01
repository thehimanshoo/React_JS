import React, {useState} from 'react';
import './App.css';
import {BrowserRouter as Router , Route , Switch}  from 'react-router-dom';
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import UpdateProduct from "./components/products/UpdateProduct";
import CreateProduct from "./components/products/CreateProduct";
import ProductAdmin from "./components/products/ProductAdmin";
import ProductList from "./components/products/ProductList";
import {Provider} from 'react-redux';
import {store} from "./redux/store";

let App = () => {

    return (
        <React.Fragment>
            <Provider store={store}>
                <Router>
                    <Navbar/>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/products/list" component={ProductList}/>
                        <Route exact path="/products/admin" component={ProductAdmin}/>
                        <Route exact path="/products/create" component={CreateProduct}/>
                        <Route exact path="/products/:id" component={UpdateProduct}/>
                    </Switch>
                </Router>
            </Provider>
        </React.Fragment>
    );
};


export default App;
