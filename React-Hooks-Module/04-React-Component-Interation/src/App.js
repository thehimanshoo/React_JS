import React, {useState} from 'react';
import './App.css';
import ParentComponent from "./components/basic/ParentComponent";
import ParentCard from "./components/intermediate/ParentCard";
import ServerCard from "./components/advanced/ServerCard";
import ClientCard from "./components/advanced/ClientCard";

let App = () => {
    let [app ,setApp] = useState({
        clientMessage : '',
        serverMessage : ''
    });

    let receiveClientData = (data) => {
        setApp({
            clientMessage : data
        })
    };

    let receiveServerData = (data) => {
        setApp({
            serverMessage : data
        })
    };


    return (
        <React.Fragment>
            <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
                <div className="container">
                    <a href="/" className="navbar-brand">React Hooks with Component Interaction</a>
                </div>
            </nav>

           {/* <ParentComponent/>*/}

          {/* <ParentCard/>*/}

            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-4 offset-1">
                        <ClientCard sendData={receiveClientData} serverMessage={app.serverMessage}/>
                    </div>
                    <div className="col-md-4 offset-1">
                        <ServerCard clientMessage={app.clientMessage} sendData={receiveServerData}/>
                    </div>
                </div>
            </div>

        </React.Fragment>
    );
};


export default App;
