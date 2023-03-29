import React, { Component } from 'react';
import '../styles/Main.css';

class Experiences extends Component {
    constructor(props) {
        super(props);
    }

    

    render () {
        const { experiences, addExperience, submitExperience } = this.props;

        return (
            <div className='main'>
                <textarea type="text" placeholder='summary' className='summary'/>
                <form className='experiences' onSubmit={submitExperience}>
                    <h1>Experience</h1>
                    {experiences.map((experience) => {
                        return <div key={experience.id}>
                            <input className='date' type='date'/>
                            <input className='company' type='text'/>
                            <input className='role' type='text'/>
                        </div>            
                               
                    })}

                    <button type="submit" className="submit">Submit</button>
                    <input type="button" className="addExperience" onClick={addExperience} value="Add"/>
                </form>
                <div className='education'>

                </div>
            </div>
        )
    }
}

export default Experiences;