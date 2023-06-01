import React, {useState} from "react";

let SMSApp = () => {
    let [maxCount , setMaxCount] = useState(100);
    let [charCount , setCharCount] = useState(100);

    // updateChars
    let updateChars = (event) => {
        setCharCount(maxCount - event.target.value.length);
    };

    return (
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header bg-warning text-white">
                                <p className="h4">SMS App</p>
                            </div>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                            <textarea
                                                maxLength={maxCount}
                                                onChange={updateChars}
                                                rows="4" className="form-control" placeholder="Type Something Dude"/>
                                    </div>
                                </form>
                            </div>
                            <div className="card-footer">
                                <p className="h5">The Characters Remaining :
                                    <span className="font-weight-bold">{charCount}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};
export default SMSApp;
