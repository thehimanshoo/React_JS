import React, {useState} from "react";
import {useSelector} from "react-redux";
import * as employeeCardReducer from '../redux/employeeCard/employeeCard.reducer';

let EmployeeCard = () => {
    let employeesInfo = useSelector((state) => {
        return state[employeeCardReducer.employeeCardFeatureKey];
    });

    let {employees} = employeesInfo;

    return (
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        {
                            employees.map(employee => {
                                return(
                                    <div key={employee.sno} className="card m-2">
                                        <div className="card-body bg-light">
                                            <ul className="list-group">
                                                <li className="list-group-item">
                                                    SNO : {employee.sno}
                                                </li>
                                                <li className="list-group-item">
                                                    NAME : {employee.name}
                                                </li>
                                                <li className="list-group-item">
                                                    AGE : {employee.age} Yrs
                                                </li>
                                                <li className="list-group-item">
                                                    DESIGNATION : {employee.designation}
                                                </li>
                                                <li className="list-group-item">
                                                    LOCATION : {employee.location}
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};
export default EmployeeCard;
