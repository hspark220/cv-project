import React, { Component } from 'react';
import '../styles/Education.css';

class Education extends Component {
    constructor(props) {
        super(props);
    }

    render () {

        const { educations, addEducation, submitEducation } = this.props;

        return (
            <form className='educations' onSubmit={submitEducation}>
                <h2>Education</h2>
                {educations.map((education) => {
                    return <div className='education' key={education.id}>
                        <input className='startDate' type='date' defaultValue={education.startDate}/>
                        <input className='endDate' type='date' defaultValue={education.endDate}/>
                        <input className='university' type='text' defaultValue={education.university} placeholder="university"/>
                        <input className='degree' type='text' defaultValue={education.degree} placeholder="degree"/>
                    </div>
                })}

                <input type="submit" className='submit' value="Submit"/>
                <input type="button" className="addEducation" onClick={addEducation} value="Add"/>
            </form>
        )
    }
}

export default Education;