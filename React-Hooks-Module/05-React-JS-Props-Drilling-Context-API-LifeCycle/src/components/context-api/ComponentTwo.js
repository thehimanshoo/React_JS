import React from "react";
import ComponentThree from "./ComponentThree";

let ComponentTwo = () => {
    return (
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-body bg-warning text-white">
                                <p className="h4">Component Two</p>
                                <ComponentThree/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};
export default ComponentTwo;
