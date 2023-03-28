import React, { Component } from 'react';
import '../styles/Header.css'

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { resizeInput } = this.props;
        
        return (
            <form className='header'>
                <div className='name'>
                    <input className="firstName" type="text" placeholder="First Name" onChange={ resizeInput }/>
                    <input className="lastName" type="text" placeholder="Last Name" onChange={ resizeInput }/>
                </div>                
                <input className="currentTitle" type="text" placeholder="current title..."/>
            </form>
        );
    }
}

export default Header;