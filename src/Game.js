import React, { Component } from 'react';

class Game extends Component {
    constructor(props){
        super(props);
        const valuesArray = this.makeNewQuestions();
        this.state ={
            value1:valuesArray[0],
            value2:valuesArray[1],
            value3:valuesArray[2],
            proposedAnswer: valuesArray[3]
        };
    }

    // Update state
    updateState = newValuesArray => {
        this.setState(currentState => ({
            value1:newValuesArray[0],
            value2:newValuesArray[1],
            value3:newValuesArray[2],
            proposedAnswer: newValuesArray[3]
        }));
    };

    // Create a new question
    makeNewQuestions = () => {
        const value1 = Math.floor(Math.random() * 100);
        const value2 = Math.floor(Math.random() * 100);
        const value3 = Math.floor(Math.random() * 100);
        const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;
        return [value1, value2, value3, proposedAnswer];
    };

    // Evaluate the answers
    evaluateAnswer(answer) {
        const { value1, value2, value3, proposedAnswer } = this.state;
        const properAnswer = value1 + value2 + value3;

        return (
            (properAnswer === proposedAnswer && answer == true) || 
            (properAnswer !== proposedAnswer && answer == false)
        )
    };

    // Add Onclick event
    handleAnswer = event => {
        const newValuesArray = this.makeNewQuestions();
        this.updateState(newValuesArray);

        const answerIsCorrect = this.evaluateAnswer(event.target.name);
        this.props.handleAnswer(answerIsCorrect);
    }

    render() {
        const { value1, value2, value3, proposedAnswer } = this.state;
        // Copy codes from App.js
        return (
            <div>
                <div className="equation">
                    <p className="text">{`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}</p>
                </div>
                <button onClick={this.handleAnswer}>True</button>
                <button onClick={this.handleAnswer}>False</button>
            </div>
        );
    }
}

export default Game;
