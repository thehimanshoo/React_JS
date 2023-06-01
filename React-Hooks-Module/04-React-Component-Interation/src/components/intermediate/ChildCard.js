import React, {useState} from "react";

let ChildCard = (props) => {
    let [child , setChild] = useState({
        cMessage : ''
    });

    let updateInput = (event) => {
        setChild({
            cMessage: event.target.value
        });
        // send the child data to parent
        props.sendData(event.target.value);
    };

    return (
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-header">
                                <p className="h4">Child Card</p>
                            </div>
                            <div className="card-body">
                                <form className="form-inline">
                                    <div className="form-group">
                                        <input
                                            value={child.cMessage}
                                            onChange={updateInput}
                                            type="text" className="form-control"/>
                                    </div>
                                </form>
                                <p>From Parent : {props.pMessage}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};
export default ChildCard;
