import React, { Component } from 'react';
import './styles/App.css';
import Header from './components/Header';
import Experiences from './components/Experiences';
import Education from './components/Education';
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
        startDate:'',
        endDate:'',
        company:'',
        title:'',
        role:[],
        id: uniqid,
      },
      experiences: [],
      education: {
        startDate: '',
        endDate: '',
        degree: '',
        university: '',
        id: uniqid,
      },
      educations: [],
      extra: {},
      info: {}
    }
  }

  addExperience = e => {
    this.setState({
      experiences: this.state.experiences.concat(this.state.experience),
      experience: {
        startDate:'',
        endDate:'',
        company:'',
        title:'',
        role:[],
        id: uniqid(),
      },
    })
  }

  submitExperience = e => {
    e.preventDefault();
    let i = 0;
    this.setState({
      experiences: this.state.experiences.map(experience => {
        experience = {
          startDate: e.target[i].value,
          endDate: e.target[i+1].value,
          title: e.target[i+2].value,
          company: e.target[i+3].value,
          role: e.target[i+4].value,
          id: uniqid(),
        }
        i+=5;
        return experience;
        
      })
    })
}

addEducation = e => {
  this.setState({
    educations: this.state.educations.concat(this.state.education),
    education: {
      startDate:'',
      endDate:'',
      degree:'',
      university:'',
      id: uniqid(),
    },
  })
}

submitEducation = e => {
  e.preventDefault();
  let i = 0;
  this.setState({
    educations: this.state.educations.map(education => {
      education = {
        startDate: e.target[i].value,
        endDate: e.target[i+1].value,
        degree: e.target[i+2].value,
        university: e.target[i+3].value,
        id: uniqid(),
      }
      i+=4;
      return education;
      
    })
  })
}

  render() {
    const {header,experiences, educations,info} = this.state;

    return (
      <div className="App">
        <h1 className='title'>cv-application</h1>
        <Header />
        <Experiences experiences={experiences} addExperience={this.addExperience} submitExperience={this.submitExperience}/>
        <Education educations={educations} addEducation={this.addEducation} submitEducation={this.submitEducation}/>
      </div>
    )
  }
}

export default App;
