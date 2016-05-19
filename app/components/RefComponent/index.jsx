import React, { Component } from 'react';
import ReactDOM, { findDOMNode } from 'react-dom';

class RefComponent extends Component {
    componentDidMount() {
        let ele = findDOMNode(this.refs.content);
        let ele2 = this.refs.content;

        console.log(ele);
        console.log(ele.innerHTML);
        console.log(ele2.innerHTML);
    }

    render() {
        return (
            <div>
                <h3>操作DOM</h3>
                <div ref='content'>这是我DOM元素里面的内容</div>
            </div>
        )
    }
}

export default RefComponent;
