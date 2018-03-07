import React from 'react';
import "./study.css";

function StudyInvitation(props) {
    const { isFirstTime, startPlay } = props;
    if (isFirstTime)
    return (

        <div className="study-wrap">
            <button className="btn btn-success" onClick={startPlay}>Test now!</button>
        </div>

    );
    return (

        <div className="study-wrap">
            <p>Congratulations!</p>
            <button className="btn btn-success" onClick={startPlay}>Test again</button>
        </div>

    );
}

export default StudyInvitation;
