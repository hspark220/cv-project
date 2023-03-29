import React, { Component } from 'react';
import '../styles/Experience.css';

class Experiences extends Component {
    constructor(props) {
        super(props);
    }

    

    render () {
        const { experiences, addExperience, submitExperience } = this.props;

        return (        
            <form className='experiences' onSubmit={submitExperience}>
                <h1>Experience</h1>
                {experiences.map((experience) => {
                    return <div className='experience' key={experience.id}>
                        <input className='startDate' type='date' defaultValue={experience.startDate}/>
                        <input className='endDate' type='date' defaultValue={experience.endDate}/>
                        <input className='title' type='text' defaultValue={experience.title}/>
                        <input className='company' type='text'defaultValue={experience.company}/>
                        <textarea className='role' defaultValue={experience.role}/>
                    </div>            
                            
                })}

                <button type="submit" className="submit">Submit</button>
                <input type="button" className="addExperience" onClick={addExperience} value="Add"/>
            </form>
        )
    }
}

export default Experiences;