import React, { Component } from 'react';
import { connect } from 'react-redux';
import StudyComponent from './StudyComponent';
import { loadWords } from '../../../redux/actions/index';

class StudyContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playingWords: [],
            currentIndex: 0,
            isFirstTime: true
        };
        this.toggleIsShow = this.toggleIsShow.bind(this);
        this.startPlay = this.startPlay.bind(this);
        this.getNextRandomIndex = this.getNextRandomIndex.bind(this);
        this.gotIt = this.gotIt.bind(this);
    }

    startPlay() {
        const playingWords = [...this.props.words];
        playingWords.forEach(word => word.isMemorized = false);
        this.setState({ playingWords, isFirstTime: false, currentIndex: 0 });
    }

    getNextRandomIndex() {
        const { length } = this.state.playingWords;
        if (length === 1) return 0;
        const { currentIndex } = this.state;
        let newIndex = Math.floor(Math.random() * length);
        while (newIndex === currentIndex) {
            newIndex = Math.floor(Math.random() * length);
        }
        this.setState({ currentIndex: newIndex });
    }

    gotIt(_id) {
        this.setState(prevState => ({
            playingWords: prevState.playingWords.filter(word => word._id !== _id),
            currentIndex: prevState.currentIndex === 0 ? 0 : prevState.currentIndex - 1
        }));
    }

    toggleIsShow() {
        this.setState(prevState => ({ isShow: !prevState.isShow }));
    }

    render() {
        return (
            <div>
                <StudyComponent
                    {...this.state}
                    toggleIsShow={this.toggleIsShow}
                    startPlay={this.startPlay}
                    getNextRandomIndex={this.getNextRandomIndex}
                    gotIt={this.gotIt}
                />
            </div>
        )
    }

}

export default connect(state => state, { loadWords })(StudyContainer);
