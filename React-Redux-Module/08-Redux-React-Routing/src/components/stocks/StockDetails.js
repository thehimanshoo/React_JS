import React, {useEffect, useState} from "react";
import {Link, useParams} from 'react-router-dom';
import Axios from "axios";

let StockDetails = () => {
    let stockId = Number(useParams().id);
    let [selectedStock , setSelectedStock] = useState({});
    let [errorMessage , setErrorMessage] = useState('');

    useEffect(() => {
        let dataURL = 'https://gist.githubusercontent.com/thenaveensaggam/635d9448bb93c8b96be007e47677082c/raw/62f52cdbde2970fd919c6f08a4cbf6b5c8a58088/stocks-27-10-2020.json';
        Axios.get(dataURL).then((response) => {
            let aStock = response.data.find(stock => stock.id === stockId);
            setSelectedStock(aStock);
        }).catch((error) => {
            console.error(error);
            setErrorMessage(error);
        });
    }, []);

    return (
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <p className="h3 text-secondary">Stock Details</p>
                        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam animi corporis ducimus eligendi exercitationem expedita illo maxime nesciunt pariatur perspiciatis, porro, quam quibusdam ratione recusandae repellat rerum voluptate. Pariatur?</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        {
                            Object.keys(selectedStock).length > 0 ?
                                <React.Fragment>
                                    <div className="card">
                                        <div className="card-header bg-secondary text-white">
                                            <p className="h5">{selectedStock.name}</p>
                                        </div>
                                        <div className="card-body rgba-purple-light">
                                            <div className="row align-items-center">
                                                <div className="col">
                                                    <ul className="list-group ">
                                                        <li className="list-group-item">
                                                            Industry : {selectedStock.industry}
                                                        </li>
                                                        <li className="list-group-item">
                                                            Sector : {selectedStock.sector}
                                                        </li>
                                                        <li className="list-group-item">
                                                            Market : {selectedStock.market}
                                                        </li>
                                                        <li className="list-group-item">
                                                            Symbol : {selectedStock.symbol}
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <Link to='/stocks' className="btn btn-secondary btn-sm">Back</Link>
                                        </div>
                                    </div>
                                </React.Fragment> : null
                        }
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};
export default StockDetails;
