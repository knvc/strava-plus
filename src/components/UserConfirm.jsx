import "./UserConfirm.css";
import React, { Component } from 'react';

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
    authorize(code) {
        console.log('authorize');
    }
    render() { 
        return ( 
            <React.Fragment>
                <h2 className="h3 mb-3 font-weight-normal">Confirm user</h2>
            </React.Fragment>
         );
    }
}
 
export default UserConfirm;