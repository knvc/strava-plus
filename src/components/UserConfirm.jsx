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
                    <h2 className="h3 mb-3 font-weight-normal">Loading...</h2>
                ) : ( 
                    this.state.user.athlete ? (
                        <React.Fragment>
                            <img src={this.state.user.athlete.profile} />
                            <h3 className="h3 mt-3 font-weight-normal">Are you {this.state.user.athlete.firstname} {this.state.user.athlete.lastname}?</h3>
                            <Link className="mt-3" to ='/'>
                                <button type="button" class="btn btn-primary">Proceed</button>
                            </Link>
                        </React.Fragment>
                    ) : (
                        <h2 className="h3 mb-3 font-weight-normal">Error: Could not fetch data</h2>
                    )
                )}
            </React.Fragment>
         );
    }
}
 
export default UserConfirm;