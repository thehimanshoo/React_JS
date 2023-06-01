import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import * as eventReducer from "../../redux/events/event.reducer";
import * as eventActions from "../../redux/events/event.actions";
import Spinner from "../../root/util/spinner/Spinner";

let ProEvents = () => {
    let dispatch = useDispatch();

    let eventsInfo = useSelector((state) => {
        return state[eventReducer.eventFeatureKey];
    });

    let {loading , events} = eventsInfo;

    useEffect(() => {
        dispatch(eventActions.getProEvents());
    }, []);

    return (
        <React.Fragment>
            <section className="p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h3 text-teal">PRO Events</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam doloribus molestiae omnis quis! Autem commodi cum, doloremque ducimus et illo incidunt ipsa laboriosam magni natus nostrum nulla odio omnis praesentium recusandae, sit soluta ullam voluptatem?</p>
                            <p className="h5">Total Available : {events.length}</p>
                        </div>
                    </div>
                </div>
            </section>
            {
                loading ? <Spinner/> :
                    <React.Fragment>
                        {
                            events.length > 0 ?
                                <React.Fragment>
                                    <section>
                                        <div className="container">
                                            <div className="row">
                                                <div className="col">
                                                    {
                                                        events.map(event => {
                                                            return (
                                                                <div className="card mt-3" key={event._id}>
                                                                    <img src={event.image} alt=""/>
                                                                    <div className="card-body bg-light">
                                                                        <div className="row">
                                                                            <div className="col">
                                                                                <p className="h4">{event.name}</p>
                                                                                <p>DATE : {event.date}</p>
                                                                                <h6>Price : {event.price}</h6>
                                                                            </div>
                                                                            <div className="col">
                                                                                <button className="btn btn-teal btn-sm">Book Now</button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </React.Fragment> : null
                        }
                    </React.Fragment>
            }
        </React.Fragment>
    )
};
export default ProEvents;