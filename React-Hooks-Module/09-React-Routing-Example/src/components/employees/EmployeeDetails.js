import React, {useEffect, useState} from "react";
import {Link, useParams} from 'react-router-dom';
import Axios from "axios";

let EmployeeDetails = () => {
    let employeeId = useParams().id;
    let [selectedEmployee , setSelectedEmployee] = useState({});
    let [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        let dataURL = 'https://gist.githubusercontent.com/thenaveensaggam/77fd2f17e30dd74e29dc39156420be1a/raw/9f872818c85abd63999200ebc963907f9197f812/customers.21-10-2020.json';
        Axios.get(dataURL).then((response) => {
            let anEmployee = response.data.find(employee => employee.login.uuid === employeeId);
            setSelectedEmployee(anEmployee);
        }).catch((error) => {
            console.error(error);
            setErrorMessage(error);
        });
    }, []);

    return (
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <p className="h3 text-secondary">Employee Details</p>
                        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam animi corporis ducimus eligendi exercitationem expedita illo maxime nesciunt pariatur perspiciatis, porro, quam quibusdam ratione recusandae repellat rerum voluptate. Pariatur?</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        {
                            Object.keys(selectedEmployee).length > 0 ?
                                <React.Fragment>
                                    <div className="card">
                                        <div className="card-header bg-secondary text-white">
                                            <p className="h5">{selectedEmployee.name.title}. {selectedEmployee.name.first} {selectedEmployee.name.last}</p>
                                        </div>
                                        <div className="card-body rgba-purple-light">
                                            <div className="row align-items-center">
                                                <div className="col-md-4 text-center">
                                                    <img src={selectedEmployee.picture.large} className="img-fluid img-thumbnail" alt=""/>
                                                </div>
                                                <div className="col-md-8">
                                                    <ul className="list-group ">
                                                        <li className="list-group-item">
                                                            AGE : {selectedEmployee.dob.age} yrs.
                                                        </li>
                                                        <li className="list-group-item">
                                                            EMAIL : {selectedEmployee.email}
                                                        </li>
                                                        <li className="list-group-item">
                                                            STATE : {selectedEmployee.location.state}
                                                        </li>
                                                        <li className="list-group-item">
                                                            City : {selectedEmployee.location.city}
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <Link to='/employees' className="btn btn-secondary btn-sm">Back</Link>
                                        </div>
                                    </div>
                                </React.Fragment> : null
                        }
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};
export default EmployeeDetails;
