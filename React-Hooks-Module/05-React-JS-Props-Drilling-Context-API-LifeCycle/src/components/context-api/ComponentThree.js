import React, {useContext} from "react";
import UserContext from "./UserContext";

let ComponentThree = () => {
    let userInfo = useContext(UserContext);
    return (
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-body bg-danger text-white">
                                <p className="h4">Component Three</p>
                                <pre>{JSON.stringify(userInfo)}</pre>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};
export default ComponentThree;
