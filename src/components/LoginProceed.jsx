import "./LoginProceed.css";
import React, { Component } from 'react';

class LoginProceed extends Component {
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
              <div class="component-login--proceed mt-5">
                { this.state.loading ? (
                    <p>Loading...</p>
                ) : ( 
                    this.state.user.athlete ? (
                        <React.Fragment>
                            
                            <article className="media">
                              <figure className="media-left">
                                <p className="image is-64x64">
                                  <img src={this.state.user.athlete.profile} alt="profile" />
                                </p>
                              </figure>
                              <div className="media-content">
                                <div className="content">
                                  <p>
                                   <strong>Are you {this.state.user.athlete.firstname} {this.state.user.athlete.lastname}?</strong><br/>
                                   
                                      Confirm your profile by clicking on 'proceed'.
                                  </p>
                                </div>
                              </div>
                            </article>
                            <div className="field is-grouped my-3">
                              <p className="control">
                                <a href="#" className="button">
                                  Proceed
                                </a>
                              </p>
                            </div>                      
                        </React.Fragment>
                    ) : (
                        <p>Please click on relogin to authenticate!</p>
                    )
                )}
                </div>
            </React.Fragment>
         );
    }
}
 
export default LoginProceed;