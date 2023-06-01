import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {buyPizza} from "../redux/pizzahut/pizzahut.actions";

let PizzaHut = () => {
    let dispatch = useDispatch();

    // get the data from REDUX Store
    let pizzaInfo  = useSelector((state) => {
        return state['pizza'];
    });

    let clickBuyPizza = () => {
        // dispatch an action to update the state
        dispatch(buyPizza());
    };

    return (
        <React.Fragment>
            <section className="p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h3 text-danger">PizzaHut</p>
                            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae commodi corporis delectus eligendi eum eveniet explicabo, fuga fugit hic iste iusto modi molestiae odit quam saepe sunt vitae voluptatem voluptates.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="p-3">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-5">
                            <img src="https://www.delonghi.com/Global/recipes/multifry/pizza_fresca.jpg" alt="" className="img-fluid img-thumbnail"/>
                        </div>
                        <div className="col-md-7">
                            <p className="h2 text-danger">Chicken Pizza</p>
                            <p className="h4">Available :
                                <span className="font-weight-bold"> {pizzaInfo.count}</span>
                            </p>
                            <button onClick={clickBuyPizza} className="btn btn-success btn-sm">Buy Pizza</button>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At eaque enim id iste itaque odio officiis optio perspiciatis provident quaerat quam quod, repellendus ullam! Cumque dolorum minima officiis reiciendis soluta!</p>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
};
export default PizzaHut;
