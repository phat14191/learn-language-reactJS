import React, { Component } from 'react';
import "./signup.css";
import signup from "./signUp.jpg";

export default class SignupComponent extends Component {
    render() {
        return (
            <div className="signup-form-wrapper">
                <form onSubmit={this.props.handleSubmit}>
                    <h3>Sign Up</h3>
                    <input onChange={this.props.handleChange} value={this.props.username} name="username" type="text" placeholder="@Username" /><br/><br/>
                    <input onChange={this.props.handleChange} value={this.props.email} name="email" type="email" placeholder="Email" /><br/><br/>
                    <input onChange={this.props.handleChange} value={this.props.password} name="password" type="password" placeholder="#" /><br/><br/>
                    <button type="submit">Create Account</button>
                    <p>{this.props.errMsg}</p>
                    <br/>
                    <img src={signup} className="signUp-img" alt=""/>
                </form>
            </div>
        )
    }
}
