import React, {useState} from "react";

let ServerCard = (props) => {
    let [server , setServer] = useState({
        message : ''
    });

    let submitServer = (e) => {
        e.preventDefault();
        props.sendData(server.message);
    };

    return (
        <React.Fragment>
            <div className="card">
                <div className="card-header bg-warning text-white">
                    <p className="h4">Server Card</p>
                </div>
                <div className="card-body">
                    <form onSubmit={submitServer}>
                        <div className="form-group">
                            <input
                                value={server.message}
                                onChange={e => setServer({message : e.target.value})}
                                type="text" className="form-control"/>
                        </div>
                        <div>
                            <input type="submit" className="btn btn-warning btn-sm" value="send"/>
                        </div>
                    </form>
                </div>
                <div className="card-footer">
                    From Client : {props.clientMessage}
                </div>
            </div>
        </React.Fragment>
    )
};
export default ServerCard;
