import React, {useState} from "react";

let ClientCard = (props) => {
    let [client , setClient] = useState({
        message : ''
    });

    let submitClient = (e) => {
        e.preventDefault();
        props.sendData(client.message); //send data to App Component
    };

    return (
        <React.Fragment>
            <div className="card">
                <div className="card-header bg-success text-white">
                    <p className="h4">Client Card</p>
                </div>
                <div className="card-body">
                    <form onSubmit={submitClient}>
                        <div className="form-group">
                            <input
                                value={client.message}
                                onChange={e => setClient({message : e.target.value})}
                                type="text" className="form-control"/>
                        </div>
                        <div>
                            <input type="submit" className="btn btn-success btn-sm" value="send"/>
                        </div>
                    </form>
                </div>
                <div className="card-footer">
                    From Server : {props.serverMessage}
                </div>
            </div>
        </React.Fragment>
    )
};
export default ClientCard;
