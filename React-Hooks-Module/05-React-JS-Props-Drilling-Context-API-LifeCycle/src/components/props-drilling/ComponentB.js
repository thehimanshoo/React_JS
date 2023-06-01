import React from "react";
import ComponentC from "./ComponentC";

let ComponentB = (props) => {
    return (
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-body bg-secondary text-white">
                                <p className="h4">Component B</p>
                                <pre className="text-white">{JSON.stringify(props.userInfo)}</pre>
                                <ComponentC userInfo={props.userInfo}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};
export default ComponentB;
