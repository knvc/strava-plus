import "./Login.css";
import React, { Component } from 'react';
import logo from "../logo/logo.svg";

class Login extends Component {
    state = {
        client_id: "",
        client_secret: "",
    }
    handleAuthorize = (e) => {
        e.preventDefault();
        console.log("authorize", this.state.client_id, this.state.client_secret);
    }
    render() { 
        return ( 
            <React.Fragment>
             <form className="form-signin" onSubmit={this.handleAuthorize}>
                 <img src={logo} alt="Logo" width="100" height="100" className="my-4" />
                 <h2 className="h3 mb-3 font-weight-normal">Sign in</h2>
                    <label htmlFor="inputClientId" className="sr-only">Client Id</label>
                    <input type="text" id="inputClientId" value={this.state.client_id} onChange={(e) => this.setState({ client_id: e.target.value})} className="form-control my-3" placeholder="Client Id" required autoFocus />
                    <label htmlFor="inputClientSecret" className="sr-only">Client Secret</label>
                    <input type="text" id="inputClientSecret" value={this.state.client_secret} onChange={(e) => this.setState({ client_secret: e.target.value})} className="form-control my-3" placeholder="Client Secret" required />
                    <button className="btn btn-lg btn-primary btn-block" onClick={this.authorize}>Sign in</button>
                </form>
            </React.Fragment>
         );
    }
}
 
export default Login;