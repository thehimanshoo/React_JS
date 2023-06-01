import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import * as messageActions from '../redux/messageCard/messageCard.actions';
import * as messageReducer from '../redux/messageCard/messageCard.reducer';

let MessageCard = () => {
    let dispatch = useDispatch();
    let messageInfo  = useSelector((state) => {
        return state[messageReducer.messageFeatureKey];
    });

     let {message} = messageInfo;

     // 1 way
     let clickGoodMorning = () => {
         dispatch(messageActions.sayGoodMorning());
     };

    return (
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <h2>{message}</h2>
                                <button onClick={clickGoodMorning}  className="btn btn-success btn-sm">Good Morning</button>
                                <button onClick={() => dispatch(messageActions.sayGoodAfternoon())} className="btn btn-warning btn-sm">Good Afternoon</button>
                                <button onClick={() => dispatch(messageActions.sayGoodEvening())}  className="btn btn-danger btn-sm">Good Evening</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};
export default MessageCard;
