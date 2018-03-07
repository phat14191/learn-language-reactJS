import React from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { logout } from "../redux/actions/index";

class Navbar extends React.Component {
    render() {
        const isAuthenticated = this.props.isAuthenticated;
        return(
            <div className ="navbar-wrapper">
                <div className="nav-link"><Link to="/">About</Link></div>
                { isAuthenticated ? null : <div className="nav-link"><Link to="/signup">Sign Up</Link></div> }
                { isAuthenticated ? null : <div className="nav-link"><Link to="/signin">Sign In</Link></div> }
                { isAuthenticated ? <div className="nav-link"><Link to="/selector">Selector</Link></div> : null }
                { isAuthenticated ? <div className="nav-link"><Link to="/profile">Profile</Link></div> : null }
                { isAuthenticated ? <div className="nav-link"><Link to="/learn">Learn</Link></div> : null }
                { isAuthenticated ? <div className="nav-link"><Link to="/study">Test</Link></div> : null }
                { isAuthenticated ? <div className="nav-link"><button className="btn btn-danger" onClick={this.props.logout}>Logout</button></div> : null }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps, { logout })(Navbar);
