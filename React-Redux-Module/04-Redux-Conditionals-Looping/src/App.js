import React, {useState} from 'react';
import './App.css';
import {Provider} from 'react-redux';
import {store} from "./redux/store";
import HobbySelector from "./components/HobbySelector";
import HobbySelectorRadio from "./components/HobbySelectorRadio";
import EmployeeCard from "./components/EmployeeCard";


let App = () => {

    return (
        <React.Fragment>
            <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
                <div className="container">
                    <a href="" className="navbar-brand">React Conditionals Looping with REDUX</a>
                </div>
            </nav>

            <Provider store={store}>
                {/*<HobbySelector/>*/}
               {/* <HobbySelectorRadio/>*/}
               <EmployeeCard/>
            </Provider>



            <div style={{marginBottom : '150px'}}/>
        </React.Fragment>
    );
};


export default App;
