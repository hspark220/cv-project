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
        experience: {
          date:'',
          company:'',
          role:[],
        },
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
    const {header,main,info} = this.state;

    return (
      <div className="App">
        <h1 className='title'>cv-application</h1>
        <Header />
        <Main main={main}/>
      </div>
    )
  }
}

export default App;
