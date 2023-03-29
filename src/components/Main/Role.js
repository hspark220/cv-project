import React, {Component } from "react";

class Role extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        const { role } = this.props;

        return(
            <div className="role">
                <h3>role</h3>
            </div>
        )

    }
}

export default Role;