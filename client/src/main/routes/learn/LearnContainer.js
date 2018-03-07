import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addWord } from "../../../redux/actions/index";
import { LearnComponent } from './LearnComponent';
import WordContainer from './word/WordContainer';
import "./learn.css"

class LearnContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs: {
                textEn: '',
                description: ''
            }
        }
        this.genList = this.genList.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.addNewWord = this.addNewWord.bind(this);
    }

    handleChange(e) {
      // console.log(this.state.inputs)
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

    genList() {
        return this.props.words.map(word => <WordContainer key={word._id} word={word} />);
    }

    addNewWord() {
    this.props.addWord(this.state.inputs);
    this.setState({ inputs: { textEn: '', description: '' } });
}

    render() {
        const { inputs } = this.state;
        return (
            <LearnComponent
                genList={this.genList}
                handleChange={this.handleChange}
                addNewWord={this.addNewWord}
                inputs={inputs}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps, { addWord })(LearnContainer);
