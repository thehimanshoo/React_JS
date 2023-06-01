import React, {useState} from "react";
import {useSelector} from "react-redux";
import * as alertReducer from '../../../redux/alert/alert.reducer';

let Alert = () => {
    let alertList = useSelector((state) => {
        return state[alertReducer.alertFeatureKey];
    });

    return (
        <React.Fragment>
            {
                alertList.length > 0 ?
                    <React.Fragment>
                        <div className={`alert alert-${alertList[0].color} alert-dismissible m-2 fixed-top animated zoomIn`}>
                            <button className="close"><i className="fa fa-times-circle"/></button>
                            {
                                alertList.map(alert => {
                                    return (
                                        <div key={alert.id}>
                                            <small className="font-weight-bold">{alert.message}</small><br/>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </React.Fragment> : null
            }
        </React.Fragment>
    )
};
export default Alert;