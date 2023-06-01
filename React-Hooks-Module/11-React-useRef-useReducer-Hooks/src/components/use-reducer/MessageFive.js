import React, {useReducer} from "react";

// Action Types
const GOOD_MORNING = 'GOOD_MORNING';
const GOOD_AFTERNOON = 'GOOD_AFTERNOON';
const GOOD_EVENING = 'GOOD_EVENING';

// Actions
let sayGoodMorning = () => {
    return {
        type : GOOD_MORNING
    }
};

let sayGoodAfternoon = () => {
    return {
        type : GOOD_AFTERNOON
    }
};

let sayGoodEvening = () => {
    return {
        type : GOOD_EVENING
    }
};

let MessageFive = () => {
    let initialState = {
        message : 'Hello'
    };

    let reducer = (state = initialState , action) => {
        switch(action.type) {
            case GOOD_MORNING:
                return {
                    message : 'Good Morning'
                };
            case GOOD_AFTERNOON:
                return {
                    message : 'Good Afternoon'
                };
            case GOOD_EVENING:
                return {
                    message : 'Good Evening'
                };
            default : return  state;
        }
    };

    let [state , dispatch] = useReducer(reducer , initialState);

    return (
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-header bg-danger text-white">
                                <p className="h4">Functional | useReducer() | REDUX Way</p>
                            </div>
                            <div className="card-body">
                                <p className="h3">{state.message}</p>
                                <button onClick={e => dispatch(sayGoodMorning())} className="btn btn-success btn-sm">Good Morning</button>
                                <button onClick={e => dispatch(sayGoodAfternoon())} className="btn btn-warning btn-sm">Good Afternoon</button>
                                <button onClick={e => dispatch(sayGoodEvening())} className="btn btn-danger btn-sm">Good Evening</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};
export default MessageFive;
