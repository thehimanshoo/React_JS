import React, {useEffect, useState} from "react";
import {useParams, useHistory} from 'react-router-dom';
import Axios from "axios";

let UpdateProduct = () => {
    let productId = useParams().id;
    let history = useHistory();
    let [selectedProduct , setSelectedProduct] = useState({
        name : '',
        image : '',
        price : '',
        qty : '',
        info : ''
    });
    let [submitted , setSubmitted] = useState(false);

    useEffect(() => {
        let dataURL = `http://127.0.0.1:5000/api/products/${productId}`;
        Axios.get(dataURL).then((response) => {
            setSelectedProduct(response.data);
        }).catch((error) => {
            console.error(error);
        });
    }, [productId]);

    let updateInput = (event) => {
        setSelectedProduct({
            ...selectedProduct,
            [event.target.name] : event.target.value
        });
    };

    // updateImage
    let updateImage = async (event) => {
        let imageFile = event.target.files[0];
        let base64Image = await convertBase64String(imageFile);
        setSelectedProduct({
            ...selectedProduct,
            image : base64Image
        });
    };

    let convertBase64String = (imageFile) => {
        return new Promise((resolve, reject) => {
            let fileReader = new FileReader();
            fileReader.readAsDataURL(imageFile);
            fileReader.addEventListener('load', () => {
                if(fileReader.result){
                    resolve(fileReader.result);
                }
                else {
                    reject('Error Occurred');
                }
            })
        });
    };

    let submitProduct = (event) => {
        event.preventDefault();
        let dataURL = `http://127.0.0.1:5000/api/products/${productId}`;
        Axios.put(dataURL, selectedProduct).then((response) => {
            setSubmitted(true);
        }).catch((error) => {
            console.error(error);
        });
    };

    return (
        <React.Fragment>
            {
                submitted ? history.push('/products/admin') :
                    <React.Fragment>
                        <section className="p-3">
                            <div className="container">
                                <div className="row">
                                    <div className="col animated zoomIn">
                                        <p className="h3 text-secondary">Update a Product</p>
                                        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid amet consequuntur, corporis, cumque dolore ea enim esse eveniet exercitationem fugit in iste itaque necessitatibus nemo nisi officiis qui totam. Explicabo!</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* <pre>{JSON.stringify(selectedProduct)}</pre>*/}
                        <section>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="card animated zoomInLeft delay-1s">
                                            <div className="card-header bg-secondary text-white">
                                                <p className="h4">Update Product</p>
                                            </div>
                                            <div className="card-body rgba-purple-light">
                                                <form onSubmit={submitProduct}>
                                                    <div className="form-group">
                                                        <input
                                                            name="name"
                                                            value={selectedProduct.name}
                                                            onChange={updateInput}
                                                            required type="text" className="form-control" placeholder="Product Name"/>
                                                    </div>
                                                    <div className="form-group">
                                                        <div className="custom-file">
                                                            <input
                                                                onChange={updateImage}
                                                                type="file" className="custom-file-input" id="customFile"/>
                                                            <label className="custom-file-label" htmlFor="customFile">
                                                                {
                                                                    selectedProduct.image !== '' ?
                                                                        <img src={selectedProduct.image} alt="" width="25" height="25"/> :
                                                                        <span>Product Image</span>
                                                                }
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <input
                                                            name="price"
                                                            value={selectedProduct.price}
                                                            onChange={updateInput}
                                                            required type="number" className="form-control" placeholder="Price"/>
                                                    </div>
                                                    <div className="form-group">
                                                        <input
                                                            name="qty"
                                                            value={selectedProduct.qty}
                                                            onChange={updateInput}
                                                            required type="number" className="form-control" placeholder="Available Qty"/>
                                                    </div>
                                                    <div className="form-group">
                                               <textarea
                                                   name="info"
                                                   value={selectedProduct.info}
                                                   onChange={updateInput}
                                                   required className="form-control" rows='2'  placeholder="Product Info"/>
                                                    </div>
                                                    <div>
                                                        <input type="submit" className="btn btn-secondary btn-sm" value="Update"/>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <div style={{marginBottom : '150px'}}/>
                    </React.Fragment>
            }
        </React.Fragment>
    )
};
export default UpdateProduct;
