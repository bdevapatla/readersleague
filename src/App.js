import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      speed:10
    };
  }

  componentDidMount() {
    const rootRef = firebase.database().ref().child('react');
    const speedRef =  rootRef.child('speed');
    speedRef.on('value',snap => {
      this.setState({
        speed:snap.val()
      });
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Reader's League</h1>
        </header>
        <p className="App-intro">
         {this.state.speed}
        </p>
      </div>
    );
  }
}

export default App;
