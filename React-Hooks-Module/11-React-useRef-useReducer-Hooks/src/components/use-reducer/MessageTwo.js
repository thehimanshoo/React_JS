import React, {useState} from "react";

let MessageTwo = () => {
    let [message , setMessage] = useState('Hello');

    return (
            <React.Fragment>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-header bg-primary text-white">
                                    <p className="h4">Functional | useState() </p>
                                </div>
                                <div className="card-body">
                                    <p className="h3">{message}</p>
                                    <button onClick={e => setMessage('Good Morning')} className="btn btn-success btn-sm">Good Morning</button>
                                    <button onClick={e => setMessage('Good Afternoon')} className="btn btn-warning btn-sm">Good Afternoon</button>
                                    <button onClick={e => setMessage('Good Evening')} className="btn btn-danger btn-sm">Good Evening</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
    )
};
export default MessageTwo;
