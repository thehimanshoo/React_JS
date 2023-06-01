import React, {useRef, useState} from "react";

let AcceptTerms = () => {
    let submitButtonEl = useRef(null);

    let updateCheck = (event) => {
        submitButtonEl.current.disabled = !event.target.checked;
    };

    return (
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <form>
                                    <div className="form-check">
                                        <input
                                            onChange={updateCheck}
                                            className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                        <label className="form-check-label" htmlFor="defaultCheck1">
                                            Accept Terms
                                        </label>
                                    </div>
                                    <input ref={submitButtonEl} type="submit" value="submit" className="btn btn-secondary btn-sm" disabled/>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};
export default AcceptTerms;
