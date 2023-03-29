import React, {Component} from 'react';

class NameInput extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {placeholder, resizeInput} = this.props;
        return (
            <>
                <input className="lastName" type="text" placeholder={ placeholder } onChange={ resizeInput }/>
            </>
        )
        
    }
}

export default NameInput;