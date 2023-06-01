import React, {useState} from 'react';
import './App.css';
import ChangeUsername from "./components/ChangeUsername";
import CarSelector from "./components/CarSelector";
import SMSApp from "./components/SMSApp";
import Register from "./components/Register";

let App = () => {

    return (
        <React.Fragment>
            <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
                <div className="container">
                    <a href="/" className="navbar-brand">React Hooks with Forms Binding</a>
                </div>
            </nav>

           {/* <ChangeUsername/>*/}
          {/* <CarSelector/>*/}
            {/*<SMSApp/>*/}

            <Register/>

        </React.Fragment>
    );
};


export default App;
