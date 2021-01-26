import "./UserConfirm.css";
import React, { Component } from 'react';
import { Link } from "react-router-dom";

class UserConfirm extends Component {
    state = {
        loading : true,
        user : {}
    }
    componentDidMount() {
        const urlParams = new URLSearchParams(window.location.search);

        if (urlParams.get('code')) {
            this.authorize(urlParams.get('code'));
        }
    }
    async authorize(code) {
        const response = await fetch('https://www.strava.com/oauth/token', {
            method: 'post',
            headers: {
                'accept': 'application/json',
                'content-type': 'application/json'
            },
                body: JSON.stringify({
                    client_id: JSON.parse(localStorage.getItem('client_id')),
                    client_secret: JSON.parse(localStorage.getItem('client_secret')),
                    code : code,
                    grant_type : 'authorization_code'
                })
            }
        );

        const fetchData = await response.json();
        console.log(fetchData);
        this.setState({ user : fetchData, loading : false });

        }
    render() { 
        return ( 
            <React.Fragment>
                { this.state.loading ? (
                    <p>Loading...</p>
                ) : ( 
                    this.state.user.athlete ? (
                        <React.Fragment>
                            <img src={this.state.user.athlete.profile} />
                            <h1 className="title is-4">Confirm your profile.</h1>
                            <p>Are you {this.state.user.athlete.firstname} {this.state.user.athlete.lastname}?</p>
                            <Link to ='/'>
                                <button className="button">Proceed</button>
                            </Link>
                        </React.Fragment>
                    ) : (
                        <p>Please click on relogin to authenticate!</p>
                    )
                )}
            </React.Fragment>
         );
    }
}
 
export default UserConfirm;