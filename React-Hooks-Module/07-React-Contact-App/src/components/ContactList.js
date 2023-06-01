import React, {useEffect, useState} from "react";
import Axios from "axios";

let ContactList = (props) => {
    let [contacts , setContacts] = useState([]);
    let [errorMessage , setErrorMessage] = useState('');

    // GET data from server, when the component is loaded on DOM
    useEffect(() => {
        let dataURL = 'https://gist.githubusercontent.com/thenaveensaggam/77fd2f17e30dd74e29dc39156420be1a/raw/9f872818c85abd63999200ebc963907f9197f812/customers.21-10-2020.json';
        Axios.get(dataURL).then((response) => {
            setContacts(response.data);
        }).catch((error) => {
            console.error(error);
            setErrorMessage(error);
        });
    }, []);

    let selectContact = (contact) => {
        props.sendContact(contact);
    };

    return (
        <React.Fragment>
            <table className="table table-hover text-center table-striped table-primary">
                <thead className="bg-dark text-white">
                    <tr>
                        <th>SNO</th>
                        <th>NAME</th>
                        <th>Email</th>
                        <th>PHONE</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        contacts.length > 0 ?
                            <React.Fragment>
                                {
                                    contacts.map((contact) => {
                                        return (
                                            <tr key={contact.login.uuid} onClick={selectContact.bind(this , contact)}>
                                                <td>{contact.login.uuid.substr(contact.login.uuid.length - 4)}</td>
                                                <td>{contact.name.first} {contact.name.last}</td>
                                                <td>{contact.email}</td>
                                                <td>{contact.phone}</td>
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
    )
};
export default ContactList;
