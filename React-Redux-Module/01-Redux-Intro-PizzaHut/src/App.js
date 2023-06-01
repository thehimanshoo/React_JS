import React, {useState} from 'react';
import './App.css';
import PizzaHut from "./components/PizzaHut";
import {Provider} from 'react-redux';
import {store} from "./redux/store";

let App = () => {

    return (
        <React.Fragment>
            <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
                <div className="container">
                    <a href="" className="navbar-brand">Pizza Hut with React & REDUX</a>
                </div>
            </nav>

           <Provider store={store}>
               <PizzaHut/>
           </Provider>


            <div style={{marginBottom : '150px'}}/>
        </React.Fragment>
    );
};


export default App;
