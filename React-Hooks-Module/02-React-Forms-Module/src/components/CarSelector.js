import React, {useState} from "react";

let CarSelector = () => {
    let [selectedCar , setSelectedCar] = useState('');

    return (
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header bg-secondary text-white">
                                <p className="h4">Select a Car</p>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col">
                                        <form>
                                            <div className="form-group">
                                                <select className="form-control"
                                                       value={selectedCar}
                                                        onChange={(e) => setSelectedCar(e.target.value)}
                                                        >
                                                    <option value="">Select a Car</option>
                                                    <option value="BMW">BMW</option>
                                                    <option value="Audi">Audi</option>
                                                    <option value="KiA Seltos">KiA Seltos</option>
                                                    <option value="Tata Harrier">Tata Harrier</option>
                                                    <option value="NEXA Baleno">NEXA Baleno</option>
                                                </select>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="col">
                                        <p className="h3">{selectedCar}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};
export default CarSelector;
