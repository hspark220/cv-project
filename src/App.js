import React, { Component } from 'react';
import './styles/App.css';
import Header from './components/Header';
import Main from './components/Main';

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
        <Main />
      </div>
    )
  }
}

export default App;
