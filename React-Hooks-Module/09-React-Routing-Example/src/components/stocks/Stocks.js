import React, {useEffect, useState} from "react";
import {Link, useHistory} from "react-router-dom";
import Axios from "axios";

let Stocks = () => {
    let history = useHistory();
    let [stocks , setStocks] = useState([]);
    let [errorMessage , setErrorMessage] = useState('');

    useEffect(() => {
        let dataURL='https://gist.githubusercontent.com/thenaveensaggam/635d9448bb93c8b96be007e47677082c/raw/62f52cdbde2970fd919c6f08a4cbf6b5c8a58088/stocks-27-10-2020.json';
        Axios.get(dataURL).then((response) => {
            setStocks(response.data);
        }).catch((error) => {
            console.error(error);
            setErrorMessage(error);
        });
    }, []);

    let selectStock = (stock) => {
        history.push(`/stocks/${stock.id}`);
    };

    return (
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <p className="h3 text-secondary">Stocks Info</p>
                        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem beatae corporis enim facilis maiores nemo officia provident quaerat, quisquam veniam! Aperiam cupiditate harum necessitatibus nesciunt officia, recusandae rerum tempora voluptatum!</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <table className="table table-hover text-center table-striped table-secondary">
                            <thead className="bg-dark text-white">
                            <tr>
                                <th>SNO</th>
                                <th>NAME</th>
                                <th>Industry</th>
                                <th>Market</th>
                                <th>Sector</th>
                                <th>Symbol</th>
                            </tr>
                            </thead>
                            <tbody>
                                {
                                    stocks.length > 0 ?
                                        <React.Fragment>
                                            {
                                                stocks.map(stock => {
                                                    return (
                                                        <tr key={stock.id} onClick={selectStock.bind(this,stock)}>
                                                                <td>{stock.id}</td>
                                                                <td>{stock.name}</td>
                                                                <td>{stock.industry}</td>
                                                                <td>{stock.market}</td>
                                                                <td>{stock.sector}</td>
                                                                <td>{stock.symbol}</td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </React.Fragment> : null
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};
export default Stocks;
