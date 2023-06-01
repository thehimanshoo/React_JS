import React, {useState} from "react";

let MessageCard = () => {
    let [message , setMessage] = useState('Hello');

    // sayGoodMorning
    let sayGoodMorning = () => {
        setMessage('Good Morning');
    };

    let sayGoodEvening = (value) => {
        setMessage(value);
    };

    return (
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <h2>{message}</h2>
                                <button onClick={sayGoodMorning}  className="btn btn-success btn-sm">Good Morning</button>
                                <button onClick={() => setMessage('Good Afternoon')}  className="btn btn-warning btn-sm">Good Afternoon</button>
                                <button onClick={sayGoodEvening.bind(this , 'Good Evening')}  className="btn btn-danger btn-sm">Good Evening</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};
export default MessageCard;
