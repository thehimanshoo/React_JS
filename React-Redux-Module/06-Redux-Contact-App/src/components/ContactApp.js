import React, {useEffect, useState} from "react";
import ContactList from "./ContactList";
import ContactCard from "./ContactCard";
import Axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {fetchContacts} from "../redux/contacts/contacts.actions";
import {CONTACT_FEATURE_KEY} from "../redux/contacts/contacts.reducer";
import Spinner from "./spinner/Spinner";

let ContactApp = () => {

    return(
        <React.Fragment>
           <div className="container mt-3">
               <div className="row">
                   <div className="col">
                       <p className="h3 text-primary">Contact App</p>
                       <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus autem et incidunt, ipsa itaque maxime minima minus natus, possimus quae, quos rerum tempora veritatis? Autem debitis molestias non repellat vel.</p>
                   </div>
               </div>
               <React.Fragment>
                   <React.Fragment>
                       <div className="row mt-3">
                           <div className="col-md-9">
                               <ContactList/>
                           </div>
                           <div className="col-md-3">
                               <ContactCard/>
                           </div>
                       </div>
                   </React.Fragment>
               </React.Fragment>
           </div>
        </React.Fragment>
    )
};
export default ContactApp;
