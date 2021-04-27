import React from 'react';
import apiService from '../../services/api.service';
import './Login.css';

export default class Login extends React.Component {

    constructor(props){
        super(props);
        this.attemptLogin = this.attemptLogin.bind(this);
        this._handleEnter = this._handleEnter.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    state = {username: '', password: ''};

    onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }
    _handleEnter(e){
        if (e.key === 'Enter') {
            this.attemptLogin();
        }
    }
    attemptLogin(){
        console.log("attempt login:", {
            user: this.state.username,
            pass: this.state.password
        });
        apiService.login({
            user: this.state.username,
            pass: this.state.password
        }).then((response) => {
            console.log("login response:", response);
            if(response.data === "unauthorized"){
                alert("why u no try again?!");
                return;
            }
            this.props.setToken(response.data);
        }).catch(e => {
            console.error(e);
        })
    }
    render() {
        return (
            <div className="my-login-page">
                <section className="h-100">
                    <div className="container h-100">
                        <div className="row justify-content-md-center h-100">
                            <div className="card-wrapper">
                                <div className="brand">
                                    <img src="fiyatla-logo.png" alt="logo" />
                                </div>
                                <div className="card fat">
                                    <div className="card-body">
                                        <h4 className="card-title">Login</h4>
                                            <div className="form-group">
                                                <label htmlFor="username">username</label>
                                                <input id="username" 
                                                    type="username" 
                                                    value={this.state.username}  
                                                    onChange = {this.onChange}
                                                    onKeyDown={this._handleEnter} 
                                                    className="form-control" 
                                                    name="username" 
                                                    required 
                                                    autoFocus />
                                                <div className="invalid-feedback">Username is invalid</div>
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="password">Password
										<a href="forgot.html" className="float-right">
                                                        Forgot Password?
										</a>
                                                </label>
                                                <input id="password" 
                                                    type="password" 
                                                    value={this.state.password}
                                                    onKeyDown={this._handleEnter} 
                                                    onChange = {this.onChange}
                                                    className="form-control" 
                                                    name="password"
                                                    required data-eye />
                                                <div className="invalid-feedback">Password is required</div>
                                            </div>

                                            <div className="form-group">
                                                <div className="custom-checkbox custom-control">
                                                    <input type="checkbox" name="remember" id="remember" className="custom-control-input" />
                                                    <label htmlFor="remember" className="custom-control-label">Remember Me</label>
                                                </div>
                                            </div>

                                            <div className="form-group m-0">
                                                <button type="submit" className="btn btn-primary btn-block" onClick = {this.attemptLogin}>Login</button>
                                            </div>
                                            <div className="mt-4 text-center">
                                                Don't have an account? <a href="register.html">Create One</a>
                                            </div>
                                    </div>
                                </div>
                                <div className="footer">
                                    Copyright &copy; 2017 &mdash; Your Company
					</div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        );
    }
}