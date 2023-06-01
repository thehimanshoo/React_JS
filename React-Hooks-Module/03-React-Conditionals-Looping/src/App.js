import React, {useState} from 'react';
import './App.css';
import AuthUser from "./components/AuthUser";
import HobbySelector from "./components/HobbySelector";
import HobbySelectorRadio from "./components/HobbySelectorRadio";
import EmployeeCard from "./components/EmployeeCard";
import Customers from "./components/Customers";

let App = () => {

    return (
        <React.Fragment>
            <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
                <div className="container">
                    <a href="/" className="navbar-brand">React Hooks with Conditionals & Looping</a>
                </div>
            </nav>

           {/* <AuthUser/>*/}
         {/*  <HobbySelector/>*/}
            {/*<HobbySelectorRadio/>*/}
       {/* <EmployeeCard/>*/}
       <Customers/>

        </React.Fragment>
    );
};


export default App;
