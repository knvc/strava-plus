import "./Login.css";
import React, { Component } from 'react';
import logo from "../logo/logo.svg";

class Login extends Component {
    handleAuthorize = (e) => {
        e.preventDefault();
        console.log("authorize");
    }
    render() { 
        return ( 
            <React.Fragment>
             <form className="form-signin" onSubmit={this.handleAuthorize}>
                 <img src={logo} alt="Logo" width="100" height="100" className="my-4" />
                 <h2 className="h3 mb-3 font-weight-normal">Sign in</h2>
                    <label htmlFor="inputClientId" className="sr-only">Client Id</label>
                    <input type="text" id="inputClientId" className="form-control my-3" placeholder="Client Id" required autoFocus />
                    <label htmlFor="inputClientSecret" className="sr-only">Client Secret</label>
                    <input type="text" id="inputClientSecret" className="form-control my-3" placeholder="Client Secret" required />
                    <button className="btn btn-lg btn-primary btn-block" onClick={this.authorize}>Sign in</button>
                </form>
            </React.Fragment>
         );
    }
}
 
export default Login;