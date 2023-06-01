import React from "react";
import {useSelector} from "react-redux";
import {CONTACT_FEATURE_KEY} from "../redux/contacts/contacts.reducer";

let ContactCard = () => {
    // fetch the data from REDUX Store
    let selectedContactInfo = useSelector((state) => {
        return state[CONTACT_FEATURE_KEY];
    });

    return(
        <React.Fragment>
            {
                Object.keys(selectedContactInfo.selectedContact).length !== 0 ?
                    <React.Fragment>
                        <div className="card sticky-top">
                            <div className="card-header bg-primary">
                                <div className="p-4"/>
                            </div>
                            <div className="card-body text-center">
                                <img src={selectedContactInfo.selectedContact.picture.large} className="img-fluid img-thumbnail rounded-circle w-50 contact-img"/>
                                <ul className="list-group text-left mt-3">
                                    <li className="list-group-item list-group-item-primary">
                                        NAME : {selectedContactInfo.selectedContact.name.first} {selectedContactInfo.selectedContact.name.last}
                                    </li>
                                    <li className="list-group-item list-group-item-primary">
                                        AGE : {selectedContactInfo.selectedContact.dob.age} Yrs.
                                    </li>
                                    <li className="list-group-item list-group-item-primary">
                                        EMAIL : {selectedContactInfo.selectedContact.email}
                                    </li>
                                    <li className="list-group-item list-group-item-primary">
                                        ADDRESS : {selectedContactInfo.selectedContact.location.city}
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
