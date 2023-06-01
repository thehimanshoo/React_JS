import React, {useEffect, useState} from "react";
import Axios from "axios";

let UserList = () => {
    let [users , setUsers] = useState([]);
    let [errorMessage , setErrorMessage] = useState('');
    let [count , setCount] = useState(0);

    // get data from server , when the component is fully loaded
    useEffect(() => {
        Axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
            console.log('Fetching Data from server' + count);
            setCount(count + 1);
            setUsers(response.data);
        }).catch((error) => {
            console.error(error);
            setErrorMessage(error);
        });
    }, []);

    return (
        <React.Fragment>
            <React.Fragment>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col">
                            <p className="h3">User List</p>
                            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A distinctio, eius error hic in nesciunt non vel veniam. Debitis, dolores eveniet iste magnam molestiae natus necessitatibus quas recusandae sunt voluptates.</p>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col">
                            <table className="table table-hover text-center table-striped table-primary">
                                <thead className="bg-dark text-white">
                                <tr>
                                    <th>SNO</th>
                                    <th>NAME</th>
                                    <th>Email</th>
                                    <th>Street</th>
                                    <th>City</th>
                                    <th>Website</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    users.length > 0 ?
                                        <React.Fragment>
                                            {
                                                users.map(user => {
                                                    return(
                                                        <tr key={user.id}>
                                                            <td>{user.id}</td>
                                                            <td>{user.name}</td>
                                                            <td>{user.email}</td>
                                                            <td>{user.address.street}</td>
                                                            <td>{user.address.city}</td>
                                                            <td>{user.website}</td>
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
        </React.Fragment>
    )
};
export default UserList;
