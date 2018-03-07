import React from "react";
import "./selector.css";
import "./selector-page.png";

function SelectorContainer(){
  return(
    <div style={{ padding: 10 }} className="selector-wrapp">
        <div >
            <button className="btn dropbtn btn-primary"> Select your language package </button>
                <div className="dropdown-content">
                </div>
        </div>
        <div className="level">
          <button className="btn btn-success">Easy</button>
          <button className="btn btn-default">Medium</button>
          <button className="btn btn-default">Hard</button>
        </div>

      </div>
  )
}

export default SelectorContainer;
