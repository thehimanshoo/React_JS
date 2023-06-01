import React, {useState} from 'react';
import './App.css';
import GithubSearchApp from "./components/GithubSearchApp";

let App = () => {

    return (
        <React.Fragment>
            <nav className="navbar navbar-dark bg-secondary navbar-expand-sm">
                <div className="container">
                    <a href="/" className="navbar-brand">Github Search with React Hooks</a>
                </div>
            </nav>

            <GithubSearchApp/>

        </React.Fragment>
    );
};


export default App;
