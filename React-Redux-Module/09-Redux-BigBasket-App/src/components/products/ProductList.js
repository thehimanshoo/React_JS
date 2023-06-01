import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import * as bigBasketActions from '../../redux/bigbasket/bigbasket.actions';
import * as bigBasketReducer from '../../redux/bigbasket/bigbasket.reducer';
import spinner from '../../assets/img/spinner.gif';

let ProductList = () => {
    let dispatch = useDispatch();

    let productInfo = useSelector((state) => {
        return state[bigBasketReducer.bigBasketFeatureKey];
    });

    let {loading , products , errorMessage} = productInfo;

    useEffect(() => {
        dispatch(bigBasketActions.getAllProducts());
    } , []);

    return (
        <React.Fragment>
            <section className="p-3">
                <div className="container">
                    <div className="row">
                        <div className="col animated zoomIn">
                            <p className="h3 text-success">Product List</p>
                            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid amet consequuntur, corporis, cumque dolore ea enim esse eveniet exercitationem fugit in iste itaque necessitatibus nemo nisi officiis qui totam. Explicabo!</p>
                        </div>
                    </div>
                </div>
            </section>
            {
                loading ?
                    <React.Fragment>
                        <img src={spinner} alt="" className="d-block m-auto"/>
                    </React.Fragment> :
                    <section className="p-3">
                        <div className="container">
                            <div className="row">
                                {
                                    products.length > 0 ?
                                        <React.Fragment>
                                            {
                                                products.map(product => {
                                                    return (
                                                        <div key={product._id} className="col-md-3">
                                                            <div className="card animated zoomIn">
                                                                <div className="card-header bg-white text-center">
                                                                    <img src={product.image} alt="" width="150" height="150"/>
                                                                </div>
                                                                <div className="card-body text-center">
                                                                    <ul className="list-group">
                                                                        <li className="list-group-item">
                                                                            NAME : {product.name}
                                                                        </li>
                                                                        <li className="list-group-item">
                                                                            Price : &#8377;{product.price.toFixed(2)}
                                                                        </li>
                                                                        <li className="list-group-item">
                                                                            Qty : {product.qty} kgs
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </React.Fragment> : <React.Fragment>
                                            <div className="text-center">
                                                <p className="text-danger font-weight-bold text-center">
                                                    ----------- NO Products Found --------
                                                </p>
                                            </div>
                                        </React.Fragment>
                                }
                            </div>
                        </div>
                    </section>
            }

        </React.Fragment>
    )
};
export default ProductList;
