import React, { Component } from 'react';

export class Button extends Component {
    handleClick = (literallyAnything) => {
        console.log(literallyAnything)
    }

    render() {
        return(
            <button
                onClick={() =>this.handleClick(this.props.value)}
            >
                {this.props.label}
            </button>
        ) 
    }
}