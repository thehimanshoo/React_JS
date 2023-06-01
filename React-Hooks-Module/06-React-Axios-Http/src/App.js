import React, {useState} from 'react';
import './App.css';
import UserList from "./components/UserList";
import Customers from "./components/Customers";

let App = () => {

    return (
        <React.Fragment>
            <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
                <div className="container">
                    <a href="/" className="navbar-brand">React Hooks with Http Calls - Axios</a>
                </div>
            </nav>

           {/* <UserList/>*/}
           <Customers/>

        </React.Fragment>
    );
};


export default App;
