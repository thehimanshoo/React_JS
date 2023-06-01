import React from "react";

let ContactCard = (props) => {
    return (
        <React.Fragment>
            {
                Object.keys(props.selectedContact).length > 0 ?
                    <React.Fragment>
                        <div className="card sticky-top">
                            <div className="card-header bg-primary text-white">
                                <div className="p-4">

                                </div>
                            </div>
                            <div className="card-body text-center">
                                <img src={props.selectedContact.picture.large} alt="" className="img-thumbnail rounded-circle w-50 contact-img"/>
                                <ul className="list-group mt-3">
                                    <li className="list-group-item list-group-item-primary">
                                        NAME : {props.selectedContact.name.first} {props.selectedContact.name.last}
                                    </li>
                                    <li className="list-group-item list-group-item-primary">
                                        {props.selectedContact.email}
                                    </li>
                                    <li className="list-group-item list-group-item-primary">
                                        AGE : {props.selectedContact.dob.age} Yrs.
                                    </li>
                                    <li className="list-group-item list-group-item-primary">
                                        City : {props.selectedContact.location.City}
                                    </li>
                                    <li className="list-group-item list-group-item-primary">
                                        State : {props.selectedContact.location.state}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </React.Fragment> : null
            }
        </React.Fragment>
    )
};
export default ContactCard;
