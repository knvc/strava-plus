import "./Login.css";
import React, { Component } from 'react';
import LoginCredentials from "./LoginCredentials";
import LoginProceed from "./LoginProceed";

class Login extends Component {
    render() { 
        return ( 
            <div class="columns is-centered my-2 px-5">
                <div class="column is-two-fifths">
                    <LoginCredentials/>
                    <LoginProceed/>
                </div>
            </div>
         );
    }
}
 
export default Login;