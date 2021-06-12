import React, { Component } from 'react';

export class Button extends Component {
    handleClick = (buttonValue) => {
        console.log(buttonValue)
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