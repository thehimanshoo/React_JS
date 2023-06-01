import React, {useState} from "react";
import {useDispatch} from "react-redux";
import * as registerActions from '../redux/register/register.actions';

let Register = () => {
    let dispatch = useDispatch();

    let [user , setUser] = useState({
        username : '',
        email : '',
        password : '',
        designation : '',
        terms : false
    });

    let updateInput = (event) => {
        if(event.target.type === 'checkbox'){
            setUser({
                ...user,
                [event.target.name] : event.target.checked
            });
        }
        else{
            setUser({
                ...user,
                [event.target.name] : event.target.value
            });
        }
    };

    let submitRegister = (event) => {
        event.preventDefault(); // to avoid page refresh
        // dispatch an action
        dispatch(registerActions.registerUser(user));
    };

    return (
        <React.Fragment>
            {/* <pre>{JSON.stringify(user)}</pre>*/}
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-header bg-danger text-white">
                                <p className="h4">Register Here</p>
                            </div>
                            <div className="card-body bg-light">
                                <form onSubmit={submitRegister}>
                                    <div className="form-group">
                                        <input
                                            name="username"
                                            value={user.username}
                                            onChange={updateInput}
                                            type="text" className="form-control" placeholder='Username'/>
                                    </div>
                                    <div className="form-group">
                                        <input
                                            name="email"
                                            value={user.email}
                                            onChange={updateInput}
                                            type="email" className="form-control" placeholder='Email'/>
                                    </div>
                                    <div className="form-group">
                                        <input
                                            name="password"
                                            value={user.password}
                                            onChange={updateInput}
                                            type="password" className="form-control" placeholder='Password'/>
                                    </div>
                                    <div className="form-group">
                                        <select className="form-control"
                                                name="designation"
                                                value={user.designation}
                                                onChange={updateInput}
                                        >
                                            <option value="">Select Designation</option>
                                            <option value="Software Engineer">Software Engineer</option>
                                            <option value="Sr.Software Engineer">Sr.Software Engineer</option>
                                            <option value="Team Lead">Team Lead</option>
                                            <option value="Project Manager">Project Manager</option>
                                            <option value="Director">Director</option>
                                        </select>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            name="terms"
                                            onChange={updateInput}
                                            className="form-check-input" type="checkbox"
                                            id="defaultCheck1"/>
                                        <label className="form-check-label" htmlFor="defaultCheck1">
                                            Accept Terms & Conditions
                                        </label>
                                    </div>
                                    <div className="form-group">
                                        <input type="submit" className="btn btn-danger btn-sm" value='Register'/>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};
export default Register;
