import React, {useState} from "react";

let ChangeUsername = () => {
    let [username , setUsername] = useState('');

    return (
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header bg-success text-white">
                                <p className="h4">React Two Way binding</p>
                            </div>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <input className="form-control"
                                               name='name'
                                               value={username}
                                               onChange={(e) => setUsername(e.target.value)}
                                               type="text" placeholder="username"/>
                                    </div>
                                </form>
                                <h3>{username}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};
export default ChangeUsername;
