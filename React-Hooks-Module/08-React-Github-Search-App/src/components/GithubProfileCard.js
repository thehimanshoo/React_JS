import React from "react";

let GithubProfileCard = (props) => {
    return (
        <React.Fragment>
            <React.Fragment>
                <div className="card">
                    <img src={props.githubProfile.avatar_url} alt="" className="img-fluid"/>
                    <div className="card-body">
                        <p className="h4">{props.githubProfile.name}</p>
                        <small>{props.githubProfile.bio}</small><br/>
                        <a href={props.githubProfile.html_url} target="_blank" className="btn btn-success btn-sm">Profile</a>
                    </div>
                </div>
            </React.Fragment>
        </React.Fragment>
    );
};
export default GithubProfileCard;
