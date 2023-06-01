import React, {useState} from 'react';
import './App.css';
import MessageCard from "./components/MessageCard";
import {Provider} from 'react-redux';
import {store} from "./redux/store";
import ProductItem from "./components/ProductItem";

let App = () => {

    return (
        <React.Fragment>
            <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
                <div className="container">
                    <a href="" className="navbar-brand">React Events Bindings with REDUX</a>
                </div>
            </nav>

            <Provider store={store}>
                {/*<MessageCard/>*/}
                <ProductItem/>
            </Provider>



            <div style={{marginBottom : '150px'}}/>
        </React.Fragment>
    );
};


export default App;
