import React from "react";
import ComponentB from "./ComponentB";

let ComponentA = (props) => {
    return (
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-body bg-success text-white">
                                <p className="h4">Component A</p>
                                <pre className="text-white">{JSON.stringify(props.userInfo)}</pre>
                                <ComponentB userInfo={props.userInfo}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};
export default ComponentA;
