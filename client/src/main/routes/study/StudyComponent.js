import React from 'react';
import { connect } from 'react-redux';
import StudyInvitation from './StudyInvitation';
import "./study.css";

function StudyComponent(props) {
    const { isShow, isFirstTime, startPlay, playingWords, currentIndex, getNextRandomIndex, gotIt, toggleIsShow, words } = props;
    const word = playingWords[currentIndex];
    if (playingWords.length === 0) return (
        <StudyInvitation
            isFirstTime={isFirstTime}
            playingWords={playingWords}
            startPlay={startPlay}
        />
    );

    return (
        <div className="study-wrap">
            <h1>TEST</h1>
            <h3>{word.textEn}(English)</h3>
            <h3>{ isShow ? word.description + '(Vietnamese)' : '------' }</h3>
            <button className="btn btn-danger" onClick={toggleIsShow}>{ isShow ? 'Hide' : 'Show' }
            </button>
            <br /><br />
            <button className="btn btn-danger" onClick={getNextRandomIndex}>
                Repeat
            </button>
            <button className="btn btn-success" onClick={() => gotIt(word._id)}>
                Got it!
            </button>
            <br /><br />
            <p>You passed {words.length - playingWords.length}/{words.length}</p>
        </div>
    );
}

export default connect(state => state)(StudyComponent);
