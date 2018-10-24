import * as React from 'react';
import './App.css';

import SideBar from './SideBar';

class Scene extends React.Component {
  public render() {
    return (
      <div className="scene1">
        <SideBar />
      </div>
    );
  }
}

export default Scene;
