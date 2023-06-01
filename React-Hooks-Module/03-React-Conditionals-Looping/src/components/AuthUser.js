import React, {useState} from "react";

let AuthUser = () => {
    let [loggedIn , setLoggedIn] = useState(false);

    let login = () => {
        setLoggedIn(true);
    };

    let logOut = () => {
        setLoggedIn(false);
    };

    return (
        <React.Fragment>
            {/*  <pre>{JSON.stringify(this.state.isLoggedIn)}</pre>*/}
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                {
                                    !loggedIn ?
                                        <button onClick={login} className="btn btn-success btn-sm">Login</button> :
                                        <button onClick={logOut} className="btn btn-warning btn-sm">LogOut</button>
                                }
                                {
                                    loggedIn ?
                                        <p className="h3">Hello! Welcome User</p> :
                                        <p className="h3">Welcome Guest</p>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};
export default AuthUser;
