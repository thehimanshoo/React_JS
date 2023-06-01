import React, {useState} from "react";
import {customerData} from "./customerStore";

let Customers = () => {
    let [customers , setCustomers] = useState(customerData);

    return (
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <p className="h3 text-primary">Customer List</p>
                        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda doloribus enim laboriosam tempore. Corporis expedita iste minima mollitia nisi odio porro rem rerum velit voluptas. Dignissimos doloribus inventore minima voluptates?</p>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col">
                        <table className="table table-hover table-striped text-center table-primary">
                            <thead className="bg-dark text-white">
                            <tr>
                                <th>SNO</th>
                                <th>Photo</th>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Email</th>
                                <th>Location</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                customers.map(customer => {
                                    return(
                                        <tr>
                                            <td>{customer.login.uuid.substr(customer.login.uuid.length - 4)}</td>
                                            <td>
                                                <img src={customer.picture.large} alt="" width="50" height="50"/>
                                            </td>
                                            <td>{customer.name.first} {customer.name.last}</td>
                                            <td>{customer.dob.age} Yrs.</td>
                                            <td>{customer.email}</td>
                                            <td>{customer.location.city}</td>
                                        </tr>
                                    )
                                })
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};
export default Customers;
