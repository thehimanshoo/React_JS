import React from "react";
import GithubProfileCard from "./GithubProfileCard";
import GithubProfileDetails from "./GithubProfileDetails";

let GithubProfile = (props) => {
    return (
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <p className="h5 text-primary">Github Profile Details</p>
                        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad nam quod soluta. Blanditiis iure sint vitae? Adipisci, facere laborum maxime nulla porro quisquam repellat repellendus rerum sint, tempora velit?</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <GithubProfileCard/>
                    </div>
                    <div className="col-md-9">
                        <GithubProfileDetails/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};
export default GithubProfile;
