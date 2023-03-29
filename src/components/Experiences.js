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
                <div className='experiences'>
                    <h1>Experience</h1>
                    {experiences.map((experience) => {
                        return <form className="experience" onSubmit={submitExperience}>
                                    
                                    <button type="submit" className="submit">Submit</button>
                                </form>
                    })}
                    
                    <button className="addExperience" onClick={addExperience}>Add</button>
                </div>
                <div className='education'>

                </div>
            </div>
        )
    }
}

export default Experiences;