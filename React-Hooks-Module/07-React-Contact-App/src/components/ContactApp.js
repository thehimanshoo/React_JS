import React, {useState} from "react";
import ContactList from "./ContactList";
import ContactCard from "./ContactCard";

let ContactApp = () => {
    let [selectedContact , setSelectedContact] = useState({});

    let receiveContact = (contact) => {
        setSelectedContact(contact);
    };

    return (
        <React.Fragment>
           {/* <pre>{JSON.stringify(selectedContact)}</pre>*/}
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <p className="h3 text-primary">Contact App</p>
                        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur eius facere iste odit praesentium quam suscipit unde voluptates! Consequuntur, necessitatibus, tempora. Est laudantium, quaerat. Ad cum dolores minima nihil temporibus!</p>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-9">
                        <ContactList sendContact={receiveContact}/>
                    </div>
                    <div className="col-md-3">
                        <ContactCard selectedContact={selectedContact}/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};
export default ContactApp;
