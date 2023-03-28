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

  }

  render() {
    return (
      <div className="App">
        <h1 className='title'>cv-application</h1>
        <Header />
      </div>
    )
  }
}

export default App;
