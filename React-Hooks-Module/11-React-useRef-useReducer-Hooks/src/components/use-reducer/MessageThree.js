import React, {useReducer} from "react";

let MessageThree = () => {
    let initialState = {
        message : 'Hello'
    };

    let reducer = (state = initialState , action) => {
        switch(action) {
            case 'gm':
                return {
                    message : 'Good Morning'
                };
            case 'ga':
                return {
                    message : 'Good Afternoon'
                };
            case 'ge':
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
                            <div className="card-header bg-success text-white">
                                <p className="h4">Functional | useReducer() | action string</p>
                            </div>
                            <div className="card-body">
                                <p className="h3">{state.message}</p>
                                <button onClick={e => dispatch('gm')} className="btn btn-success btn-sm">Good Morning</button>
                                <button onClick={e => dispatch('ga')} className="btn btn-warning btn-sm">Good Afternoon</button>
                                <button onClick={e => dispatch('ge')} className="btn btn-danger btn-sm">Good Evening</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};
export default MessageThree;
