import "./Login.css";
import React, { Component } from 'react';
import logo from "../logo/logo.svg";

class Login extends Component {
    render() { 
        return ( 
            <React.Fragment>
             <form className="form-signin">
                 <img src={logo} alt="Logo" width="100" height="100" className="my-4" />
                 <h2 class="h3 mb-3 font-weight-normal">Sign in</h2>
                    <label for="inputClientId" className="sr-only">Client Id</label>
                    <input type="text" id="inputClientId" className="form-control my-3" placeholder="Client Id" required autofocus />
                    <label for="inputClientSecret" className="sr-only">Client Secret</label>
                    <input type="text" id="inputClientSecret" className="form-control my-3" placeholder="Client Secret" required />
                    <button className="btn btn-lg btn-primary btn-block">Sign in</button>
                </form>
            </React.Fragment>
         );
    }
}
 
export default Login;