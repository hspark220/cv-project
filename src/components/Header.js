import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form>
                <h1>cv-application</h1>
                <input className="firstName" type="text" placeholder="First Name"/>
                <input className="lastName" type="text" placeholder="Last Name"/>
                <input className="currentTitle" type="text" placeholder="current title..."/>
            </form>
        );
    }
}

export default Header;