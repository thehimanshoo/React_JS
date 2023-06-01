import React, {useState} from "react";

let Counter = () => {
    let [counter , setCounter] = useState(0);

    let updateCounter = () => {
        setCounter(counter + 1);
    };

    return (
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-header bg-warning text-white">
                                <p className="h4">Counter Class</p>
                            </div>
                            <div className="card-body">
                                <p className="h2">{counter}</p>
                                <button onClick={updateCounter} className="btn btn-warning btn-sm">Increment</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};
export default Counter;
