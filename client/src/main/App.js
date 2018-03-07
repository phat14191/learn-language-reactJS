import React from "react";

import { Route, Switch, withRouter, Redirect } from "react-router-dom";

import Navbar from "./Navbar";
import AboutComponent from "./routes/about/AboutComponent";
import SignupContainer from "./routes/signup/SignUpContainer";
import SigninContainer from "./routes/signin/SignInContainer";
import SelectorContainer from "./routes/selector/SelectorContainer";
import ProfileComponent from "./routes/profile/ProfileComponent";
import LearnContainer from "./routes/learn/LearnContainer";
import StudyContainer from "./routes/study/StudyContainer";
import ProtectedRoute from "./routes/ProtectedRoute";
import { connect } from 'react-redux';
import {verify, loadWords} from "../redux/actions/index";

class App extends React.Component {
    componentDidMount(){
        this.props.verify();
    }
    render() {
        const isAuthenticated = this.props.isAuthenticated;
        return (
            <div className="app-wrapper">
                <Navbar />
                <Switch>
                    <Route exact path="/" component={AboutComponent} />{/* What this app is about?, who made it, github/linkedin etc*/}
                    <Route path="/signin" render={(props) => {
                        return isAuthenticated ?
                            <Redirect to="/profile" /> :
                            <SigninContainer {...props} />
                    }} />
                    <Route path="/signup" render={(props) => {
                        return isAuthenticated ?
                            <Redirect to="/profile" /> :
                            <SignupContainer {...props} />
                    }} />
                    <ProtectedRoute path="/selector" component={SelectorContainer} />{/* will show username selected language, selected level*/}
                    <ProtectedRoute path="/profile" component={ProfileComponent} />{/* will show Welcome to learning, username, language, score-card*/}
                    <ProtectedRoute path="/learn" component={LearnContainer} />
                    <ProtectedRoute path="/study" component={StudyContainer} />
                </Switch>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return state;
}

export default withRouter(connect(mapStateToProps,{verify, loadWords})(App));
