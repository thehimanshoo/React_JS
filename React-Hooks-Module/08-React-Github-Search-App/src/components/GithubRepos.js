import React from "react";

let GithubRepos = (props) => {
    return (
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <p className="h5 text-primary">Github Repos Details</p>
                        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias aliquid assumenda beatae eaque, esse facere facilis, iusto laborum nihil omnis quod quos reprehenderit sed sequi veritatis voluptate. Esse, sit.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <React.Fragment>
                            <div className="card">
                                <div className="card-header">
                                    <p className="h4">Your Repositories</p>
                                </div>
                                <div className="card-body">
                                    <ul className="list-group">
                                        {
                                            props.githubRepos.map(repo => {
                                                return(
                                                    <React.Fragment>
                                                        <li className="list-group-item">
                                                            <div className="d-flex justify-content-between">
                                                    <span className="h5">
                                                        <a href={repo.html_url} target="_blank">{repo.name}</a>
                                                    </span>
                                                                <span className="badge badge-success">{repo.stargazers_count} Stars </span>
                                                                <span className="badge badge-warning">{repo.watchers_count} Watchers </span>
                                                            </div>
                                                        </li>
                                                    </React.Fragment>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                        </React.Fragment>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};
export default GithubRepos;
