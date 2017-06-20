import React, { Component } from 'react';
import logo from './logo.svg';
import Accounts from './components/Accounts';
import Repayment from './components/Repayment';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Accounts />
        <Repayment />
      </div>
    );
  }
}

export default App;
