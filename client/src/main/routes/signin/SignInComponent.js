import React, { Component } from 'react';
import "./signin.css";
import signin from "./signIn.jpg";

export default class SigninComponent extends Component {
    render() {
        return (
            <div className="signin-form-wrapper">
                <div className="signin-form-light">
                      <form onSubmit={this.props.handleSubmit}>
                          <h3>Sign In</h3>
                          <input onChange={this.props.handleChange} value={this.props.username} name="username" type="text" placeholder="@Username" /><br/><br/>
                          <input onChange={this.props.handleChange} value={this.props.password} name="password" type="password" placeholder="#" /><br/><br/>
                          <button type="submit">Submit</button>
                          <p>{this.props.errMsg}</p>
                          <img src={signin} className="signin-img" alt=""/>
                      </form>
                  </div>
            </div>
        )
    }
}
