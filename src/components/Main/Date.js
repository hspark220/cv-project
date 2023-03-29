import React, { Component } from "react";

class Date extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        const { date } = this.props;

        return (
            <div className="date">
                <h3>date</h3>
            </div>
        )
    }
}

export default Date;