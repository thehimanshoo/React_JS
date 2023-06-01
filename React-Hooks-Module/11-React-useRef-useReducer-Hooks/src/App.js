import React, {useState} from 'react';
import './App.css';
import ButtonExample from "./components/use-ref/ButtonExample";
import AcceptTerms from "./components/use-ref/AcceptTerms";
import MessageOne from "./components/use-reducer/MessageOne";
import MessageTwo from "./components/use-reducer/MessageTwo";
import MessageThree from "./components/use-reducer/MessageThree";
import MessageFour from "./components/use-reducer/MessageFour";
import MessageFive from "./components/use-reducer/MessageFive";

let App = () => {

    return (
        <React.Fragment>
            <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
                <div className="container">
                    <a href="" className="navbar-brand">React Hooks useRef() & useReducer()</a>
                </div>
            </nav>

            {/*<ButtonExample/>*/}

          {/*  <AcceptTerms/>*/}

          <MessageOne/>
          <MessageTwo/>
          <MessageThree/>
          <MessageFour/>
          <MessageFive/>


            <div style={{marginBottom : '150px'}}/>
        </React.Fragment>
    );
};


export default App;
