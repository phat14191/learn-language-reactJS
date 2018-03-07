import React, { Component } from 'react';
import WordComponent from './WordComponent';
import { editWord } from '../../../../redux/actions/index';
import { connect } from 'react-redux';

class WordContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isUpdating: false,
            isFlipped: false,
            inputs: {
                textEn: props.word.textEn,
                description: props.word.description
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.toggleUpdating = this.toggleUpdating.bind(this);
        this.updateWord = this.updateWord.bind(this);
        this.toggleFlip = this.toggleFlip.bind(this);
    }

    toggleUpdating() {
        this.setState(prevState => ({ isUpdating: !prevState.isUpdating }));
    }
    toggleFlip(){
        this.setState(prevState => ({isFlipped: !prevState.isFlipped}));
    }
    handleChange(e) {
        e.persist();
        this.setState((prevState) => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [e.target.name]: e.target.value
                }
            }
        })
    }

    updateWord() {
        const { editWord, word } = this.props;
        const { textEn, description } = this.state.inputs;
        editWord(word._id, { textEn, description });
        this.setState({ isUpdating: false });
    }

    render() {
        const { word } = this.props;
        const { isUpdating, inputs } = this.state;
        return (
            <WordComponent
                word={word}
                handleChange={this.handleChange}
                inputs={inputs}
                isUpdating={isUpdating}
                toggleUpdating={this.toggleUpdating}
                updateWord={this.updateWord}
                toggleFlip={this.toggleFlip}

            />
        );
    }
}

export default connect(null, {editWord})(WordContainer);
