import React, { Component } from 'react';
import {
    MyComponent,
    ComponentDemo,
    StyleComponet,
    SpreadDemo,
    StateAndProps,
    PropTypesDemo,
    LifeCycle,
    DestroyComponent
} from '../../components';

import './index.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <MyComponent />
        <p>
          欢迎在github上一起维护这个脚手架项目<br />
          https://github.com/GuoYongfeng
        </p>
        <hr/>
        <ComponentDemo />
        <hr/>
        <StyleComponet />
        <hr/>
        <SpreadDemo name="FE" type="front engineer!!"/>
        <hr />
        <StateAndProps />
        <hr />
        <PropTypesDemo title="prop属性类型"/>
        <hr />
        <LifeCycle />
        <hr />
        <DestroyComponent />
      </div>
    );
  }
}

export default App;
