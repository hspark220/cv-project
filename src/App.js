import React, { Component } from 'react';
import Header from './components/Header';
import './App.css';

class App extends Component {
  constructor (props) {
    super(props);

    this.resizeInput = this.resizeInput.bind(this);

  }

  resizeInput = e => {
    console.log(e.keyDown);
    let length = e.target.value.trim().length;
    if (e.key == 'l') length-= 1;
    e.target.style.width = length + "ch";
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
