import React, { Component } from 'react';
import Header from './components/Header';
import './styles/App.css';

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      header: {
        name: '',
        currentTitle: '',
      },
      main: {
        experience: {},
        experiences: [],
        education: {},
        educations: [],
        extra: {},
      },
      info: {

      }
    }

    this.resizeInput = this.resizeInput.bind(this);

  }

  resizeInput = e => {
    const length = e.target.value.trim().length+1;
    e.target.placeholder = '';
    e.target.style.width = e.target.value.length > 0 ? length + "ch" : '200px';
    
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
