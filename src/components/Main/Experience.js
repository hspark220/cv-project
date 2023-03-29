import React, { Component } from "react";
import Date from './Date.js';
import Company from "./Company.js";
import Role from "./Role.js";

class Experience extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        const { experience } = this.props;

        return (
            <div className="experience">
                <Date date={experience.date}/>
                <Company company={experience.company}/>
                <Role role={experience.role}/>
                <button type="submit" className="submit">Submit</button>
            </div>
        )

    }

}

export default Experience;