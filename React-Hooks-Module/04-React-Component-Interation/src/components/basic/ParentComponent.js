import React, {useState} from "react";
import ChildComponent from "./ChildComponent";

let ParentComponent = () => {
    let [parent , setParent] = useState({
        message : 'Hello Iam From Parent',
        wishMessage : ''
    });

    let receiveData = (data) => {
        setParent({
            ...parent,
            wishMessage: data
        });
    };

    return(
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <p className="h3">Parent Component</p>
                                <p>From Child : {parent.wishMessage}</p>
                                <ChildComponent message={parent.message} sendData={receiveData}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};
export default ParentComponent;
