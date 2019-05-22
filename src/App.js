import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './Game.js';
import Score from './Score.js';

class App extends Component {
  state = {
      correctAnswer: 0,
      numQuestions: 0,
  };

  handleAnswer = answerIsCorrect => {
    if(answerIsCorrect) {
      this.setState(currentState => ({
        correctAnswer: currentState.correctAnswer + 1,
      }));
    }
    this.setState(currentState => ({
      numQuestions: currentState.numQuestions + 1,
    }));
  };


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <Game
            handleAnswer={this.handleAnswer}
          />
          <Score 
            numCorrect={this.state.correctAnswer}
            numQuestions={this.state.numQuestions}
          />
        </div>
      </div>
    );
  }
}

export default App;
