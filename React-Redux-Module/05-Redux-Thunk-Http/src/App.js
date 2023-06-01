import React, {useState} from 'react';
import './App.css';
import {Provider} from 'react-redux';
import {store} from "./redux/store";
import UserList from "./components/UserList";
import UserListSimple from "./components/UserListSimple";

let App = () => {

    return (
        <React.Fragment>
            <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
                <div className="container">
                    <a href="" className="navbar-brand">React REDUX with Http</a>
                </div>
            </nav>

            <Provider store={store}>
                {/*<UserList/>*/}
                <UserListSimple/>
            </Provider>


            <div style={{marginBottom : '150px'}}/>
        </React.Fragment>
    );
};


export default App;
