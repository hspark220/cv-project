import React, { Component } from 'react';
import './styles/App.css';
import Header from './components/Header';
import Experiences from './components/Experiences';
import uniqid from "uniqid";

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      header: {
        name: '',
        currentTitle: '',
      },
      experience: {
        date:'',
        company:'',
        role:[],
        id: uniqid,
      },
      experiences: [],
      education: {},
      educations: [],
      extra: {},
      info: {}
    }
  }

  addExperience = e => {
    this.setState({
      experiences: this.state.experiences.concat(this.state.experience),
      experience: {
        date: '',
        company: '',
        role: '',
        id: uniqid(),
      },
    })
  }

  submitExperience = e => {
    e.preventDefault();
    this.setState({
      main: {
        experiences: this.state.experiences
      }
    })
}

  render() {
    const {header,experiences,info} = this.state;

    return (
      <div className="App">
        <h1 className='title'>cv-application</h1>
        <Header />
        <Experiences experiences={experiences} addExperience={this.addExperience} submitExperience={this.submitExperience}/>
      </div>
    )
  }
}

export default App;
