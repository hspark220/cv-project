import React, { Component } from 'react';
import Header from './components/Header';
import './App.css';

class App extends Component {
  constructor (props) {
    super(props);

    this.resizeInput = this.resizeInput.bind(this);

  }

  resizeInput = e => {
    console.log(e.target.value.length);
    e.target.style.width = (e.target.value.trim().length) + "ch";
  }

  render() {
    return (
      <div className="App">
        <h1 className='title'>cv-application</h1>
        <Header resizeInput={ this.resizeInput }/>
      </div>
    )
  }
}

export default App;
