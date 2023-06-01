import React from "react";
import spinnerImage from '../../assets/img/spinner.gif';

let Spinner = () => {
    return (
        <React.Fragment>
            <div>
                <img src={spinnerImage} alt="" className="d-block m-auto"/>
            </div>
        </React.Fragment>
    )
};
export default Spinner;
