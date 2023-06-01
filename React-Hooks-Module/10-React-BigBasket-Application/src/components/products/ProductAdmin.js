import React, {useEffect, useState} from "react";
import {Link} from 'react-router-dom';
import Axios from "axios";

let ProductAdmin = () => {
    let [products , setProducts] = useState([]);
    let [errorMessage , setErrorMessage] = useState('');

    useEffect(() => {
        getAllProducts();
    } , []);

    let getAllProducts = () => {
        let dataURL = 'http://127.0.0.1:5000/api/products';
        Axios.get(dataURL).then((response) => {
            setProducts(response.data);
        }).catch((error) => {
            console.error(error);
            setErrorMessage(error);
        });
    };

    let deleteProduct = (productID) => {
        let dataURL = `http://127.0.0.1:5000/api/products/${productID}`;
        Axios.delete(dataURL).then((response) => {
            getAllProducts();
        }).catch((error) => {
            console.error(error);
        });
    };

    return (
        <React.Fragment>
            <section className="p-3">
                <div className="container">
                    <div className="row">
                        <div className="col animated zoomIn">
                            <p className="h3 text-success">Product Admin</p>
                            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid amet consequuntur, corporis, cumque dolore ea enim esse eveniet exercitationem fugit in iste itaque necessitatibus nemo nisi officiis qui totam. Explicabo!</p>
                            <Link to='/products/create' className="btn btn-success btn-sm">Create New</Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="">
                <div className="container">
                    <div className="row">
                        <div className="col animated zoomInLeft delay-1s">
                            <table className="table table-hover text-center table-striped table-success">
                                <thead className="bg-dark text-success">
                                    <tr>
                                        <th>SNO</th>
                                        <th>Image</th>
                                        <th>NAME</th>
                                        <th>Qty</th>
                                        <th>Price</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        products.length > 0 ?
                                            <React.Fragment>
                                                {
                                                    products.map(product => {
                                                        return (
                                                            <tr key={product._id}>
                                                                <td>{product._id.substr(product._id.length - 5)}</td>
                                                                <td>
                                                                    <img src={product.image} alt="" width="50" height="50"/>
                                                                </td>
                                                                <td>{product.name}</td>
                                                                <td>&#8377; {product.price.toFixed(2)}</td>
                                                                <td>{product.qty} kgs</td>
                                                                <td>
                                                                    <Link to={`/products/${product._id}`} className="btn btn-secondary btn-sm">Update</Link>
                                                                    <button onClick={deleteProduct.bind(this, product._id)} className="btn btn-danger btn-sm">Delete</button>
                                                                </td>
                                                            </tr>
                                                        )
                                                    })
                                                }
                                            </React.Fragment> : <React.Fragment>
                                                <tr>
                                                    <td colSpan="6" className="text-danger font-weight-bold">----------- No Products Found --------- </td>
                                                </tr>
                                            </React.Fragment>
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
};
export default ProductAdmin;
