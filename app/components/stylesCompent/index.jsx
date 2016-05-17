import React, { Component } from 'react';

class StyleComponet extends Component {
  render(){
    // 5. 在JS文件里面给组件定义样式
    var MyComponentStyles = {
        color: 'blue',
        fontSize: '28px'
    };

    return (
      <div style={MyComponentStyles}>
          我是行内样式的Componnent
      </div>
    )
  }
}

export default StyleComponet;
