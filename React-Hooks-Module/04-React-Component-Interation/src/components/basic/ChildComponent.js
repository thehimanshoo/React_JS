import React, {useState} from "react";

let ChildComponent = (props) => {
    let [child , setChild] = useState({
        wishMessage : 'Hello Iam from Child'
    });

    let clickButton = () => {
        props.sendData(child.wishMessage);
    };

    return (
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-body bg-light">
                                <p className="h3">Child Component</p>
                                <span>{props.message}</span>
                                <button className="btn btn-secondary btn-sm" onClick={clickButton}>send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};
export default ChildComponent;
