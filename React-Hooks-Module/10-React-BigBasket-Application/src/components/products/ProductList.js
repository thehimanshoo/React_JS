import React, {useEffect, useState} from "react";
import Axios from "axios";

let ProductList = () => {
    let [products , setProducts] = useState([]);
    let [errorMessage , setErrorMessage] = useState('');

    useEffect(() => {
        let dataURL = 'http://127.0.0.1:5000/api/products';
        Axios.get(dataURL).then((response) => {
            setProducts(response.data);
        }).catch((error) => {
            console.error(error);
            setErrorMessage(error);
        });
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
                                                    <div className="card animated zoomIn delay-1s">
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
        </React.Fragment>
    )
};
export default ProductList;
