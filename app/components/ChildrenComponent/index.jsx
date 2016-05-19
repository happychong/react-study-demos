'use strick';

import React, { Component } from 'react';

class ListComponent extends Component {
    render() {
        return (
            <ul>
                {React.Children.map(this.props.children, function(c) {
                    return <li>{c}</li>
                })}
            </ul>
        )
    }
}

class UseChildrenComponent extends Component {
    render() {
        return (
            <ListComponent>
                <a href="#">FaceBook</a>
                <a href="#">Google</a>
                <a href="#">SpaceX</a>
            </ListComponent>
        )
    }
}

export default UseChildrenComponent;
