import React from 'react';
import './App.css';
import CounterClass from "./components/CounterClass";
import Counter from "./components/Counter";
import MessageCard from "./components/MessageCard";
import ProductItem from "./components/ProductItem";

let App = () => {

    return (
        <React.Fragment>
            <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
                <div className="container">
                    <a href="/" className="navbar-brand">React Hooks with Events Binding</a>
                </div>
            </nav>

           {/* <CounterClass/>*/}
            {/*<Counter/>*/}
            {/*<MessageCard/>*/}
            <ProductItem/>
        </React.Fragment>
    );
};


export default App;
