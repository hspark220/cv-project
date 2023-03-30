import React, { Component } from 'react';
import NameInput from './Header/NameInput';
import '../styles/Header.css'

class Header extends Component {
    constructor(props) {
        super(props);

    }

    resizeInput = e => {
        const length = e.target.value.trim().length;
        e.target.placeholder = '';
        e.target.style.width = e.target.value.length > 0 ? length + "ch" : '200px';
       
        this.resizeInput = this.resizeInput.bind(this);
      }

    render() {
        return (
            <form className='header'>
                <div className='name'>
                    <NameInput placeholder='First Name' resizeInput={ this.resizeInput }/>
                    <NameInput placeholder='Last Name' resizeInput={ this.resizeInput }/>       
                </div>
                <input className="currentTitle" type="text" placeholder="current title..."/>
                <textarea type="text" placeholder='summary' className='summary'/>
            </form>
        );
    }
}

export default Header;