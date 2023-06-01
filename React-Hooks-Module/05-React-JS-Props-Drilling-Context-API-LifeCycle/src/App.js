import React, {useState} from 'react';
import './App.css';
import ComponentA from "./components/props-drilling/ComponentA";
import DigitalWatch from "./components/life-cycle/DigitalWatch";
import UserContext from "./components/context-api/UserContext";
import ComponentOne from "./components/context-api/ComponentOne";

let App = () => {

    let [app ,setApp] = useState({
        userInfo : {
            author : 'NAVEEN SAGGAM',
            channel : 'UiBrains Technologies'
        }
    });

    return (
        <React.Fragment>
            <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
                <div className="container">
                    <a href="/" className="navbar-brand">React Hooks with Props-Drilling-Context-API-LifeCycle</a>
                </div>
            </nav>

            {/* -------------- Props Drilling Example -------------- */}
            {/*<div className="container mt-3">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-body bg-light">
                                    <p className="h4">App Component</p>
                                    <pre className="text-white">{JSON.stringify(app.userInfo)}</pre>
                                    <ComponentA userInfo={app.userInfo}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>*/}

               {/* <DigitalWatch/>*/}

            {/* -------------- Context API Example -------------- */}
            <div className="container mt-3">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-body bg-light">
                                    <p className="h4">App Component</p>
                                    <pre>{JSON.stringify(app.userInfo)}</pre>

                                    <UserContext.Provider value={app.userInfo}>
                                        <ComponentOne/>
                                    </UserContext.Provider>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

        </React.Fragment>
    );
};


export default App;
