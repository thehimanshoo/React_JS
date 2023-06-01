import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import * as eventActions from '../../redux/events/event.actions';
import {useHistory} from 'react-router-dom';
import * as userActions from '../../redux/users/user.actions';
import * as userReducer from '../../redux/users/user.reduces';

let UploadEvent = () => {
    let dispatch = useDispatch();
    let history = useHistory();

    let userInfo = useSelector((state) => {
        return state[userReducer.usersFeatureKey];
    });

    let {user} = userInfo;

    let [event , setEvent] = useState({
        name : '',
        image : '',
        date : '',
        type : '',
        price : '',
        info : ''
    });

    let updateInput = (e) => {
        setEvent({
            ...event,
            [e.target.name] : e.target.value
        });
    };

    let submitUpload = (e) => {
        e.preventDefault();
        dispatch(eventActions.uploadEvent(event , history));
    };

    return (
        <React.Fragment>
          {/*  <pre>{JSON.stringify(event)}</pre>*/}
            <section className="p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h3 text-teal">
                               <i className="fa fa-file-upload"/> Upload Event</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam doloribus molestiae omnis quis! Autem commodi cum, doloremque ducimus et illo incidunt ipsa laboriosam magni natus nostrum nulla odio omnis praesentium recusandae, sit soluta ullam voluptatem?</p>
                        </div>
                    </div>
                </div>
            </section>
            {
                user?.isAdmin ? <React.Fragment>
                        <section>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-8">
                                        <form onSubmit={submitUpload}>
                                            <div className="form-group">
                                                <input
                                                    name="name"
                                                    value={event.name}
                                                    onChange={updateInput}
                                                    required
                                                    type="text" className="form-control" placeholder="Name"/>
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    name="image"
                                                    value={event.image}
                                                    onChange={updateInput}
                                                    required
                                                    type="text" className="form-control" placeholder="Image"/>
                                            </div>
                                            <div className="form-group">
                                                <select
                                                    name="type"
                                                    value={event.type}
                                                    onChange={updateInput}
                                                    required
                                                    className="form-control">
                                                    <option value="">Event Type</option>
                                                    <option value="FREE">FREE</option>
                                                    <option value="PRO">PRO</option>
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    name="price"
                                                    value={event.price}
                                                    onChange={updateInput}
                                                    required
                                                    type="number" className="form-control" placeholder="Price"/>
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    name="date"
                                                    value={event.date}
                                                    onChange={updateInput}
                                                    required
                                                    type="text" className="form-control" placeholder="Date"/>
                                            </div>
                                            <div className="form-group">
                                    <textarea
                                        name="info"
                                        value={event.info}
                                        onChange={updateInput}
                                        rows="4" className="form-control" placeholder="Information"/>
                                            </div>
                                            <div>
                                                <input type="submit" className="btn btn-teal btn-sm" value="Upload"/>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </section>
                </React.Fragment> :
                    <React.Fragment>
                        <section>
                            <div className="container">
                                <div className="row">
                                    <div className="col text-center">
                                        <p className="h4 text-danger">---------- You are not Authorized to Upload -----------</p>
                                        <small>If you are an admin ?, please contact your DBA to allow access</small>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </React.Fragment>
            }
        </React.Fragment>
    )
};
export default UploadEvent;