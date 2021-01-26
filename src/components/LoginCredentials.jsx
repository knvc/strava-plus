import "./LoginCredentials.css";
import React, { Component } from 'react';
import logo from "../logo/logo.svg";

class LoginCredentials extends Component {
    constructor(props) {
        super(props);

        this.state = {
            client_id: "",
            client_secret: "",
        }

        if (localStorage.getItem('client_id')) {
            this.state.client_id = JSON.parse(localStorage.getItem('client_id'));
        }

        if (localStorage.getItem('client_secret')) {
            this.state.client_secret = JSON.parse(localStorage.getItem('client_secret'));
        }
    }
    handleAuthorize = (e) => {
        e.preventDefault();

        localStorage.setItem('client_id', JSON.stringify(this.state.client_id));
        localStorage.setItem('client_secret', JSON.stringify(this.state.client_secret));

        window.location = 'https://www.strava.com/oauth/authorize?client_id=' + this.state.client_id + 
        '&response_type=code&redirect_uri=http://localhost:3000/confirm' + 
        '&approval_prompt=auto&scope=read,read_all,profile:read_all,profile:write,activity:read,activity:read_all,activity:write';
    }
    render() { 
        return ( 
            <React.Fragment>
                <div class="columns is-mobile is-centered">
                    <div class="column is-two-fifths">
                        <img src={logo} alt="Logo" width="100" height="100" className="my-4" />
                        <h1 className="title is-4">Sign in to Strava-Plus</h1>
                        <form onSubmit={this.handleAuthorize}>
                            <div class="field">
                                <label class="label" htmlFor="inputClientId">Client ID</label>
                                <div class="control">
                                    <input class="input" id="inputClientId" type="text" value={this.state.client_id} onChange={(e) => this.setState({ client_id: e.target.value})} placeholder="Client Id" required autoFocus placeholder="Text input" />
                                </div>
                            </div>
                            <div class="field">
                                <label class="label" htmlFor="inputClientSecret">Secret ID</label>
                                <div class="control">
                                    <input class="input" id="inputClientSecret" type="text" value={this.state.client_secret} onChange={(e) => this.setState({ client_secret: e.target.value})} placeholder="Client Secret" required />
                                </div>
                            </div>
                            <div class="control">
                                <button className="button" onClick={this.authorize}>Sign in</button>
                            </div>
                        </form>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default LoginCredentials;