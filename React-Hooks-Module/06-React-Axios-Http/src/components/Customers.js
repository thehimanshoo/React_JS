import React, {useEffect, useState} from "react";
import Axios from "axios";

let Customers = () => {
    let [customers , setCustomers] = useState([]);
    let [errorMessage , setErrorMessage]  = useState('');

    useEffect(() => {
        let dataURL = 'https://gist.githubusercontent.com/thenaveensaggam/77fd2f17e30dd74e29dc39156420be1a/raw/9f872818c85abd63999200ebc963907f9197f812/customers.21-10-2020.json';
        Axios.get(dataURL).then((response) => {
            setCustomers(response.data);
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
                        <p className="h3 text-primary">Customers</p>
                        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, deserunt exercitationem facilis fugit maxime nisi nostrum nulla, quo sint soluta tempore, voluptas voluptate voluptates. Corporis ea incidunt libero nam velit.</p>
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
                                customers.length > 0 ?
                                    <React.Fragment>
                                        {
                                            customers.map(customer => {
                                                return(
                                                    <tr key={customer.login.uuid}>
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
export default Customers;
