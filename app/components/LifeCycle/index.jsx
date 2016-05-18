import React, { Component } from 'react';
class LifeCycle extends Component {
    Props = {
        value: '开始渲染'
    }

    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps');
        this.setState({
            value: nextProps.value
        })
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldCompinentUpdate');
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate');
    }

    componentWillMount() {
        console.log('componentWillMount');
    }

    render() {
        console.log('render');
        return <span>{this.Props.value}</span>
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate');
    }

    componentWillUnmount(prevProps, prevState) {
        console.log('componentWillUnount');
    }
}

export default LifeCycle;
