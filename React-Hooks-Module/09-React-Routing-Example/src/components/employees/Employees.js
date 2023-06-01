import React, {useEffect, useState} from "react";
import Axios from "axios";
import {Link} from 'react-router-dom';

let Employees = () => {
    let [employees , setEmployees] = useState([]);
    let [errorMessage , setErrorMessage] = useState([]);

    useEffect(() => {
        let dataURL = 'https://gist.githubusercontent.com/thenaveensaggam/77fd2f17e30dd74e29dc39156420be1a/raw/9f872818c85abd63999200ebc963907f9197f812/customers.21-10-2020.json';
        Axios.get(dataURL).then((response) => {
            setEmployees(response.data);
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
                        <p className="h3 text-secondary">Employees Info</p>
                        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem beatae corporis enim facilis maiores nemo officia provident quaerat, quisquam veniam! Aperiam cupiditate harum necessitatibus nesciunt officia, recusandae rerum tempora voluptatum!</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <table className="table table-hover text-center table-striped table-secondary">
                            <thead className="bg-dark text-white">
                                <tr>
                                    <th>SNO</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>State</th>
                                    <th>City</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    employees.length > 0 ?
                                        <React.Fragment>
                                            {
                                                employees.map(employee => {
                                                    return (
                                                        <tr key={employee.login.uuid}>
                                                            <td>{employee.login.uuid.substr(employee.login.uuid.length - 5)}</td>
                                                            <td>
                                                                <Link to={`/employees/${employee.login.uuid}`} className="text-secondary">{employee.name.title}. {employee.name.first} {employee.name.last}</Link>
                                                            </td>
                                                            <td>{employee.email}</td>
                                                            <td>{employee.location.state}</td>
                                                            <td>{employee.location.city}</td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </React.Fragment> : null
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};
export default Employees;
