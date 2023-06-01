import React, {useState} from 'react';
import './App.css';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom';
import Navbar from "./components/layout/Navbar";
import Home from "./components/layout/Home";
import About from "./components/layout/About";
import Employees from "./components/employees/Employees";
import EmployeeDetails from "./components/employees/EmployeeDetails";
import Stocks from "./components/stocks/Stocks";
import StockDetails from "./components/stocks/StockDetails";
import {Provider} from 'react-redux';
import {store} from "./redux/store";

let App = () => {

    return (
        <React.Fragment>
            <Router>
                <Provider store={store}>
                    <Navbar/>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/about" component={About}/>
                        <Route exact path="/employees" component={Employees}/>
                        <Route exact path="/employees/:id" component={EmployeeDetails}/>
                        <Route exact path="/stocks" component={Stocks}/>
                        <Route exact path="/stocks/:id" component={StockDetails}/>
                    </Switch>
                </Provider>
            </Router>
        </React.Fragment>
    );
};


export default App;
