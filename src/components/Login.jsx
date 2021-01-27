import "./Login.css";
import React, { Component } from 'react';
import LoginCredentials from "../components/LoginCredentials";
import LoginProceed from "./LoginProceed";

class Login extends Component {
    render() { 
        return ( 
            <React.Fragment>
                <LoginCredentials/>
                <LoginProceed/>
            </React.Fragment>
         );
    }
}
 
export default Login;