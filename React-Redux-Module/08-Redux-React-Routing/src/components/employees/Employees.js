import React, {useEffect} from "react";
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import * as employeeActions from '../../redux/employees/employees.actions';
import * as employeeReducer from '../../redux/employees/employees.reducer';
import spinner from '../../assets/img/spinner.gif';

let Employees = () => {
    let dispatch = useDispatch();

    let employeesInfo = useSelector((state) => {
        return state[employeeReducer.employeesFeatureKey];
    });

    let {loading , employees , errorMessage} = employeesInfo;

    useEffect(() => {
        dispatch(employeeActions.fetchAllEmployees());
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
                {
                    loading ?
                        <React.Fragment>
                            <img src={spinner} alt="" className="d-block m-auto"/>
                        </React.Fragment> :
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
                }
            </div>
        </React.Fragment>
    )
};
export default Employees;
