import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import * as productItemReducer from '../redux/productItem/productItem.reducer';
import * as productItemActions from '../redux/productItem/productItem.actions';

let ProductItem = () => {
    let dispatch = useDispatch();

    // get the data form Redux store
    let productInfo = useSelector((state) => {
        return state[productItemReducer.productItemFeatureKey];
    });
    let {product} = productInfo;

    let clickIncrQty = () => {
       dispatch(productItemActions.incrQty());
    };

    let clickDecrQty = () => {
       dispatch(productItemActions.decrQty());
    };

    return (
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <p className="h3 text-primary">Products Cart</p>
                        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur excepturi perferendis quam veritatis? Aperiam omnis, sapiente! Facilis, perspiciatis sequi? Accusamus aliquam dolorem eius ex magni nesciunt, odit quas sunt tempora?</p>
                    </div>
                </div>
               {/* <pre>{JSON.stringify(this.state.product)}</pre>*/}
                <div className="row">
                    <div className="col">
                        <table className="table table-hover text-center table-striped table-light">
                            <thead className="bg-dark text-white">
                            <tr>
                                <th>SNO</th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Qty</th>
                                <th>Total</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>{product.id}</td>
                                <td>
                                    <img src={product.image} alt="" width="50" height="50"/>
                                </td>
                                <td>{product.name}</td>
                                <td>&#8377; {product.price.toFixed(2)}</td>
                                <td>
                                    <i className="fa fa-minus-circle mx-1" onClick={clickDecrQty}/>
                                    {product.qty}
                                    <i className="fa fa-plus-circle mx-1" onClick={clickIncrQty}/>
                                </td>
                                <td>&#8377; {(product.price * product.qty).toFixed(2)}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};
export default ProductItem;
