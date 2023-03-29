import React, { Component } from "react";

class Company extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        const { company } = this.props;

        return(
            <div className="company">
                <h3>company</h3>
            </div>
        )
    }
}

export default Company;