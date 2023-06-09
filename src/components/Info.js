import React, { Component } from "react";
import '../styles/Info.css'

class Info extends Component {
    constructor (props) {
        super (props);
    }

    render () {
        const { info, submitInfo} = this.props;

        return (
            <form className="info" onSubmit={submitInfo}>
                <h2>Personal Info</h2>
                <div className="address">
                    <label htmlFor='address'>Address:</label>
                    <input type='text' name='address' />
                </div>
                <div className="phone">
                    <label htmlFor='phone'>Phone:</label>
                    <input type='tel' name='phone'/>
                </div>
                <div className="email">
                    <label htmlFor='email'>Email:</label>
                    <input type='email' name='email'/>
                </div>
                

                <h2>Skills</h2>
                <ul>
                    <li><input type='text' className="skill" placeholder="Skill 1"/></li>
                    <li><input type='text' className="skill" placeholder="Skill 2"/></li>
                    <li><input type='text' className="skill" placeholder="Skill 3"/></li>
                    <li><input type='text' className="skill" placeholder="Skill 4"/></li>
                    <li><input type='text' className="skill" placeholder="Skill 5"/></li>
                </ul>
                <input className="submit" type="submit" value="Submit"/>
            </form>

        )
    }
}

export default Info;