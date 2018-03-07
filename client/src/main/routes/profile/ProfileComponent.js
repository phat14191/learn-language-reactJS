import React from "react";
import { connect } from 'react-redux';
import "./profile.css";
import "./profile-boder.jpg";

function ProfileComponent(props){
  return(
      <div className="profile-wrapper">
          <div className="profile-text">
          <h3 > <br/><br/><br/> Welcome <br/><br/><br/>{props.user.username} !</h3>
          <p>Now click your level of difficulty in selector tab</p>
          </div>
      </div>
  )
}

const mapStateToProps = (state)=>{
  return state;
}

export default connect(mapStateToProps, {})(ProfileComponent);
