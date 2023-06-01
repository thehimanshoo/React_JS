import React, {useState} from "react";
import Axios from "axios";
import {useHistory} from 'react-router-dom';
import * as bigBasketActions from '../../redux/bigbasket/bigbasket.actions';
import {useDispatch} from "react-redux";

let CreateProduct = () => {
    let dispatch = useDispatch();
    let history = useHistory();
    let [product , setProduct] = useState({
        name : '',
        image : '',
        price : '',
        qty : '',
        info : ''
    });

    // updateImage
    let updateImage = async (event) => {
        let imageFile = event.target.files[0];
        let base64Image = await convertBase64String(imageFile);
        setProduct({
            ...product,
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

    let updateInput = (event) => {
        setProduct({
            ...product,
            [event.target.name] : event.target.value
        });
    };

    let submitProduct = (event) => {
        event.preventDefault();
        dispatch(bigBasketActions.createProduct(product, history));
    };

    return (
        <React.Fragment>
            <React.Fragment>
                <section className="p-3">
                    <div className="container">
                        <div className="row">
                            <div className="col animated zoomIn">
                                <p className="h3 text-success">Create a Product</p>
                                <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid amet consequuntur, corporis, cumque dolore ea enim esse eveniet exercitationem fugit in iste itaque necessitatibus nemo nisi officiis qui totam. Explicabo!</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card animated zoomInLeft delay-1s">
                                    <div className="card-header bg-success text-white">
                                        <p className="h4">Create New</p>
                                    </div>
                                    <div className="card-body rgba-light-green-light">
                                        <form onSubmit={submitProduct}>
                                            <div className="form-group">
                                                <input
                                                    name="name"
                                                    value={product.name}
                                                    onChange={updateInput}
                                                    required type="text" className="form-control" placeholder="Product Name"/>
                                            </div>
                                            <div className="form-group">
                                                <div className="custom-file">
                                                    <input
                                                        onChange={updateImage}
                                                        required type="file" className="custom-file-input" id="customFile"/>
                                                    <label className="custom-file-label" htmlFor="customFile">
                                                        {
                                                            product.image !== '' ?
                                                                <img src={product.image} alt="" width="25" height="25"/> :
                                                                <span>Product Image</span>
                                                        }
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    name="price"
                                                    value={product.price}
                                                    onChange={updateInput}
                                                    required type="number" className="form-control" placeholder="Price"/>
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    name="qty"
                                                    value={product.qty}
                                                    onChange={updateInput}
                                                    required type="number" className="form-control" placeholder="Available Qty"/>
                                            </div>
                                            <div className="form-group">
                                               <textarea
                                                   name="info"
                                                   value={product.info}
                                                   onChange={updateInput}
                                                   required className="form-control" rows='2'  placeholder="Product Info"/>
                                            </div>
                                            <div>
                                                <input type="submit" className="btn btn-success btn-sm" value="Create"/>
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
        </React.Fragment>
    )
};
export default CreateProduct;
