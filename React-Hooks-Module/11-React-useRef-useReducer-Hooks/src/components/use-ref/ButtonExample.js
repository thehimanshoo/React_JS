import React, {useRef} from "react";
import card1 from '../../assets/img/card_1.jpg';

let ButtonExample = () => {
    let imageEl = useRef(null);

    let getImage = () => {
        console.log(imageEl.current);
    };

    return(
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-3">
                        <div className="card">
                            <img ref={imageEl} src={card1} alt="" className="img-fluid"/>
                            <div className="card-body">
                                <button onClick={getImage} className="btn btn-secondary btn-sm">Click Me</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};
export default ButtonExample;
