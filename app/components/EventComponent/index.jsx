'use strict';
import React, { Component } from 'react';

class EventComponent extends Component {
    state = {
        lided: false
    }

    handleClick = (event) => {
        this.setState({
            liked: !this.state.liked
        })
    }

    render() {
        let text = this.state.liked ? '稀饭' : '不喜欢';

        return (
            <p onClick={this.handleClick}>
            我 {text} 你
            </p>
        )
    }
}

export default EventComponent;
