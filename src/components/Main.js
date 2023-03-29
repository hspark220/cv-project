import React, { Component } from 'react';
import '../styles/Main.css';

class Main extends Component {
    constructor(props) {
        super(props);
    }

    render () {

        return (
            <div className='main'>
                <textarea type="text" placeholder='summary' className='summary'/>
            </div>
        )
    }
}

export default Main;