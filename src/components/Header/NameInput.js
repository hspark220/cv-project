import React, {Component} from 'react';

class NameInput extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {placeholder, resizeInput} = this.props;
        return (
            <div className='name'>
                <input className="lastName" type="text" placeholder={ placeholder } onChange={ resizeInput }/>
            </div>
        )
        
    }
}

export default NameInput;