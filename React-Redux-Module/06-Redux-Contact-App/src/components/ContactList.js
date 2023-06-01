import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {CONTACT_FEATURE_KEY} from "../redux/contacts/contacts.reducer";
import {fetchContacts, selectContact} from "../redux/contacts/contacts.actions";
import Spinner from "./spinner/Spinner";

let ContactList = () => {

    let dispatch = useDispatch();

    // fetch data from REDUX Store
    let contactInfo = useSelector((state) => {
        return state[CONTACT_FEATURE_KEY];
    });

    // dispatch action to get data from server to store
    useEffect(() => {

    }, []);

    let clickContact = (contact) => {
        dispatch(selectContact(contact));
    };

    let getData = () => {
        dispatch(fetchContacts());
    };

    return(
        <React.Fragment>
            <button onClick={getData} className="btn btn-primary btn-sm">Get Data</button>
            {
                contactInfo.loading ? <Spinner/> :
                    <React.Fragment>

                        <table className="table table-hover table-primary text-center table-striped">
                            <thead className="bg-primary text-white">
                            <tr>
                                <th>SNO</th>
                                <th>IMAGE</th>
                                <th>NAME</th>
                                <th>AGE</th>
                                <th>EMAIL</th>
                                <th>LOCATION</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                contactInfo.contacts.length > 0 ?
                                    <React.Fragment>
                                        {
                                            contactInfo.contacts.map((contact) => {
                                                return (
                                                    <tr key={contact.login.uuid} onClick={clickContact.bind(this,contact)}>
                                                        <td>{contact.login.uuid.substr(contact.login.uuid.length - 4)}</td>
                                                        <td>
                                                            <img src={contact.picture.large} width="50" height="50"/>
                                                        </td>
                                                        <td>{contact.name.first} {contact.name.last}</td>
                                                        <td>{contact.dob.age} Yrs.</td>
                                                        <td>{contact.email}</td>
                                                        <td>{contact.location.city}</td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </React.Fragment> : null
                            }
                            </tbody>
                        </table>
                    </React.Fragment>
            }
        </React.Fragment>
    )
};
export default ContactList;
