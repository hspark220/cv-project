import React, { Component } from "react";
import Date from './Date.js';
import Company from "./Company.js";
import Role from "./Role.js";

class Experience extends Component {
    constructor(props) {
        super(props);
    }

    render () {

        return (
            <div className="experience">
                <Date />
                <Company />
                <Role />
                <button type="submit" className="submit">Submit</button>
            </div>
        )

    }

}

export default Experience;