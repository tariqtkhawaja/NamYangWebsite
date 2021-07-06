import React, { Component } from 'react';

export class Button extends Component {
    state = {
        hasBeenPressed: false,
    }

    handleClick = (buttonValue) => {
        this.setState({ hasBeenPressed: true });
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