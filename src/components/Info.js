import React, { Component } from "react";

class Info extends Component {
    constructor (props) {
        super (props);
    }

    render () {

        return (
            <form className="info">
                <h2>Personal Info</h2>
                <label for='address'>Address</label>
                <input type='text' name='address' />
                <label for='phone'>Phone</label>
                <input type='tel' name='phone'/>
                <label for='email'>Email</label>
                <input type='email' name='email'/>

                <h2>Skills</h2>
                <ul>
                    <li><input type='text' className="skill" placeholder="Skill 1"/></li>
                    <li><input type='text' className="skill" placeholder="Skill 2"/></li>
                    <li><input type='text' className="skill" placeholder="Skill 3"/></li>
                    <li><input type='text' className="skill" placeholder="Skill 4"/></li>
                    <li><input type='text' className="skill" placeholder="Skill 5"/></li>
                </ul>
            </form>
        )
    }
}

export default Info;