import React, {useEffect, useState} from "react";

let DigitalWatch = () => {
    let [currentTime , setCurrentTime] = useState(new Date().toLocaleTimeString());

    // componentDidMount
    // when the component is fully loaded on DOM
    useEffect(() => {
        let timer = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString())
        } , 1000);

        // when the component is removed from DOM
        return () => {
            // componentWillUnmount
            clearInterval(timer);
        };
    });

    return (
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-6 m-auto">
                        <div className="card">
                            <div className="card-header bg-secondary text-white text-center">
                                <p className="h4">Digital Watch</p>
                            </div>
                            <div className="card-body text-center">
                                <h3 className="display-3">{currentTime}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};
export default DigitalWatch;
