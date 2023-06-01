import React from "react";
import * as userActions from '../redux/userList/userList.actions';
import * as userReducer from '../redux/userList/userList.reducer';
import {useDispatch, useSelector} from "react-redux";

let UserList = () => {
    let dispatch = useDispatch();

    // get data from Redux Store
    let userListInfo = useSelector((state) => {
        return state[userReducer.userListFeatureKey];
    });

    let {loading , users , errorMessage} = userListInfo;

    let clickGetUsers = () => {
        dispatch(userActions.fetchUsers());
    };

    return (
        <React.Fragment>
            <section className="p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h3 text-primary">User List</p>
                            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium ad aut doloribus eum eveniet, expedita fugiat impedit ipsa iure mollitia officiis placeat quaerat quos repellat sed tenetur veritatis, vero?</p>
                            <button onClick={clickGetUsers} className="btn btn-primary btn-sm">Get Users</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <pre>{JSON.stringify(users)}</pre>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
};
export default UserList;
