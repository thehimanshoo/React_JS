import React, {useState} from 'react';
import './App.css';
import {Provider} from 'react-redux';
import {store} from "./redux/store";
import Register from "./components/Register";

let App = () => {

    return (
        <React.Fragment>
            <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
                <div className="container">
                    <a href="" className="navbar-brand">React Forms Bindings with REDUX</a>
                </div>
            </nav>

            <Provider store={store}>
                <Register/>
            </Provider>



            <div style={{marginBottom : '150px'}}/>
        </React.Fragment>
    );
};


export default App;
