import React, {useState} from "react";

let HobbySelectorRadio = () => {
    let [hobby , setHobby] = useState(null);

    let updateCheck = (event) => {
        setHobby(event.target.value);
    };

    return (
        <React.Fragment>
            {/*  <pre>{JSON.stringify(this.state)}</pre>*/}
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
                                                    onChange={updateCheck}
                                                    className="form-check-input" type="radio"
                                                    name="exampleRadios" id="exampleRadios1" value="eating"
                                                />
                                                <label className="form-check-label" htmlFor="exampleRadios1">
                                                    Eating
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input
                                                    onChange={updateCheck}
                                                    className="form-check-input" type="radio"
                                                    name="exampleRadios" id="exampleRadios2" value="coding"/>
                                                <label className="form-check-label" htmlFor="exampleRadios2">
                                                    Coding
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input
                                                    onChange={updateCheck}
                                                    className="form-check-input" type="radio"
                                                    name="exampleRadios" id="exampleRadios3" value="sleeping"/>
                                                <label className="form-check-label" htmlFor="exampleRadios3">
                                                    Sleeping
                                                </label>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="col-md-9">
                                        {
                                            hobby === 'eating' ?
                                                <React.Fragment>
                                                    <div className="card animated jello">
                                                        <div className="card-body bg-success text-white">
                                                            <p className="h3">Eating</p>
                                                        </div>
                                                    </div>
                                                </React.Fragment> : null
                                        }
                                        {
                                            hobby === 'coding' ?
                                                <React.Fragment>
                                                    <div className="card animated jello">
                                                        <div className="card-body bg-primary text-white">
                                                            <p className="h3">Coding</p>
                                                        </div>
                                                    </div>
                                                </React.Fragment> : null
                                        }
                                        {
                                           hobby === 'sleeping' ?
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
export default HobbySelectorRadio;
