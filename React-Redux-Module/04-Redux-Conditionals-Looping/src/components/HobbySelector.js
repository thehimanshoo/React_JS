import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import * as hobbySelectorActions from '../redux/hobbySelector/hobbySelector.actions';
import * as hobbySelectorReducer from '../redux/hobbySelector/hobbySelector.reducer';
import {checkSleeping} from "../redux/hobbySelector/hobbySelector.actions";

let HobbySelector = () => {
    let dispatch = useDispatch();
    let hobbySelectorInfo = useSelector((state) => {
        return state[hobbySelectorReducer.hobbySelectorFeatureKey];
    });

    let {hobby} = hobbySelectorInfo;

    let checkEating = () => {
        dispatch(hobbySelectorActions.checkEating());
    };

    let checkCoding = () => {
        dispatch(hobbySelectorActions.checkCoding());
    };

    let checkSleeping = () => {
        dispatch(hobbySelectorActions.checkSleeping());
    };

    return (
        <React.Fragment>
            {/*<pre>{JSON.stringify(this.state)}</pre>*/}
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header bg-secondary text-white">
                                <p className="h4">Hobby Selector</p>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-3">
                                        <form>
                                            <div className="form-check">
                                                <input
                                                    name="eating"
                                                    onChange={checkEating}
                                                    className="form-check-input" type="checkbox" value=""
                                                    id="defaultCheck1"/>
                                                <label className="form-check-label" htmlFor="defaultCheck1">
                                                    Eating
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input
                                                    name="coding"
                                                    onChange={checkCoding}
                                                    className="form-check-input" type="checkbox" value=""
                                                    id="defaultCheck2" />
                                                <label className="form-check-label" htmlFor="defaultCheck2">
                                                    Coding
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input
                                                    name="sleeping"
                                                    onChange={checkSleeping}
                                                    className="form-check-input" type="checkbox" value=""
                                                    id="defaultCheck3"/>
                                                <label className="form-check-label" htmlFor="defaultCheck3">
                                                    Sleeping
                                                </label>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="col-md-9">
                                        {
                                            hobby.eating ?
                                                <React.Fragment>
                                                    <div className="card animated jello">
                                                        <div className="card-body bg-success text-white">
                                                            <p className="h3">Eating</p>
                                                        </div>
                                                    </div>
                                                </React.Fragment> : null
                                        }
                                        {
                                            hobby.coding ?
                                                <React.Fragment>
                                                    <div className="card animated jello">
                                                        <div className="card-body bg-primary text-white">
                                                            <p className="h3">Coding</p>
                                                        </div>
                                                    </div>
                                                </React.Fragment> : null
                                        }
                                        {
                                            hobby.sleeping ?
                                                <React.Fragment>
                                                    <div className="card animated jello">
                                                        <div className="card-body bg-danger text-white">
                                                            <p className="h3">Sleeping</p>
                                                        </div>
                                                    </div>
                                                </React.Fragment> : null
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};
export default HobbySelector;
