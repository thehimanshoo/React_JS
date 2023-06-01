import React from "react";
import {useDispatch, useSelector} from "react-redux";
import * as userListSimpleActions from '../redux/userListSimple/userListSimple.actions';
import * as userListSimpleReducer from '../redux/userListSimple/userListSimple.reducer';
import spinner from '../assets/img/spinner.gif';

let UserListSimple = () => {
    let dispatch = useDispatch();

    // get data from REDUX Store
    let userListInfo = useSelector((state) => {
        return state[userListSimpleReducer.userListSimpleFeatureKey];
    });

    let {loading , users , errorMessage} = userListInfo;

    let clickGetUsers = () => {
        //dispatch(userListSimpleActions.fetchUsers());
        dispatch(userListSimpleActions.fetchUsersAsync());
    };

    return (
        <React.Fragment>
            <section className="p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h3 text-primary">User List (Simple Way)</p>
                            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium ad aut doloribus eum eveniet, expedita fugiat impedit ipsa iure mollitia officiis placeat quaerat quos repellat sed tenetur veritatis, vero?</p>
                            <button onClick={clickGetUsers} className="btn btn-primary btn-sm">Get Users</button>
                        </div>
                    </div>
                    <div>
                        {
                            loading &&
                            <img src={spinner} alt="" className="d-block m-auto"/>
                        }
                    </div>
                    <div className="row">
                        <div className="col">
                            {
                                !loading && users.length > 0 ?
                                    <React.Fragment>
                                        <table className="table table-hover text-center table-striped table-primary">
                                            <thead className="bg-dark text-white">
                                            <tr>
                                                <th>SNO</th>
                                                <th>NAME</th>
                                                <th>Email</th>
                                                <th>City</th>
                                                <th>Phone</th>
                                                <th>Website</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {
                                                users.length > 0 ?
                                                    <React.Fragment>
                                                        {
                                                            users.map((user) => {
                                                                return (
                                                                    <tr key={user.id}>
                                                                        <td>{user.id}</td>
                                                                        <td>{user.name}</td>
                                                                        <td>{user.email}</td>
                                                                        <td>{user.address.city}</td>
                                                                        <td>{user.phone}</td>
                                                                        <td>{user.website}</td>
                                                                    </tr>
                                                                )
                                                            })
                                                        }
                                                    </React.Fragment> : null
                                            }
                                            </tbody>
                                        </table>
                                    </React.Fragment> : null
                            }
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
};
export default UserListSimple;
