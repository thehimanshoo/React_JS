import React, {useState} from "react";
import ChildCard from "./ChildCard";

let ParentCard = () => {
    let [parent , setParent] = useState({
        pMessage : '',
        cText : ''
    });

    // receiveData
    let receiveData = (data) => {
        setParent({
            ...parent,
            cText: data
        });
    };

    let updateInput = (event) => {
        setParent({
            ...parent,
            pMessage: event.target.value
        });
    };

    return (
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-header">
                                <p className="h4">Parent Card</p>
                            </div>
                            <div className="card-body">
                                <form className="form-inline">
                                    <div className="form-group">
                                        <input
                                            value={parent.pMessage}
                                            onChange={updateInput}
                                            type="text" className="form-control"/>
                                    </div>
                                </form>
                                <p>From Child : {parent.cText}</p>
                                <ChildCard pMessage={parent.pMessage} sendData={receiveData}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};
export default ParentCard;
