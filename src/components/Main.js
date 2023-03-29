import React, { Component } from 'react';
import '../styles/Main.css';
import Experience from './Main/Experience';

class Main extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        const { main } = this.props;

        return (
            <div className='main'>
                <textarea type="text" placeholder='summary' className='summary'/>
                <div className='experiences'>
                    <h1>Experience</h1>
                    {main.experiences.map((experience) => {
                        return <Experience experience={experience}/>
                    })}
                    
                    <button className="Add">Add</button>
                </div>
                <div className='education'>

                </div>
            </div>
        )
    }
}

export default Main;