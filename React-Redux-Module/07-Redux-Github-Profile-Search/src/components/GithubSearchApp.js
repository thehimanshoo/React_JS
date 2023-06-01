import React, {useState} from "react";
import Axios from "axios";
import {CLIENT_ID, CLIENT_SECRET} from "./GtihubCredentials";
import GithubProfile from "./GithubProfile";
import GithubRepos from "./GithubRepos";
import {useDispatch, useSelector} from "react-redux";
import * as githubSearchActions from '../redux/githubSearch/githubSearch.actions';
import * as githubSearchReducer from '../redux/githubSearch/githubSearch.reducer';

let GithubSearchApp = () => {
    let dispatch = useDispatch();

    let githubSearchInfo = useSelector((state) => {
        return state[githubSearchReducer.githubSearchFeatureKey];
    });

    let {loading , profile , repos} = githubSearchInfo;

    let [githubUser , setGithubUser] = useState('');
    let [githubProfile , setGithubProfile] = useState({});
    let [githubRepos , setGithubRepos] = useState([]);
    let [errorMessage , setErrorMessage] = useState('');

    let submitSearch = (event) => {
        event.preventDefault();
        dispatch(githubSearchActions.fetchProfileInfo(githubUser));
        dispatch(githubSearchActions.fetchReposInfo(githubUser));
    };

    return (
        <React.Fragment>
          {/*  <pre>{githubUser}</pre>*/}
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <p className="h3 text-secondary">Github Profile Search</p>
                        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut culpa dicta eaque excepturi hic in ipsa itaque minima, nobis obcaecati perferendis ratione reiciendis reprehenderit soluta voluptate! Animi dolorem quisquam soluta.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <form className="form-inline" onSubmit={submitSearch}>
                            <div className="form-group">
                                <input
                                    value={githubUser}
                                    onChange={e => setGithubUser(e.target.value)}
                                    size="30" type="text" className="form-control" placeholder="Github Username"/>
                            </div>
                            <input type="submit" className="btn btn-secondary btn-sm" value="Search"/>
                        </form>
                    </div>
                </div>
            </div>
                {/* Github Profile Details */}
                <React.Fragment>
                        {
                            Object.keys(profile).length > 0 ?
                                <React.Fragment>
                                     <GithubProfile/>
                                </React.Fragment> : null
                        }
                </React.Fragment>
                {/* Github Repos Details*/}
                <div className="row">
                    <div className="col">
                        {
                            repos.length > 0 ?
                                <React.Fragment>
                                    <GithubRepos/>
                                </React.Fragment> : null
                        }
                    </div>
                </div>
        </React.Fragment>
    );
};
export default GithubSearchApp;
