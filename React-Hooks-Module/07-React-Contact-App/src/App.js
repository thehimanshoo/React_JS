import React, {useState} from 'react';
import './App.css';
import ContactApp from "./components/ContactApp";

let App = () => {

    return (
        <React.Fragment>
            <nav className="navbar navbar-dark bg-primary navbar-expand-sm">
                <div className="container">
                    <a href="/" className="navbar-brand">React Hooks with Contact App</a>
                </div>
            </nav>

            <ContactApp/>

        </React.Fragment>
    );
};


export default App;
