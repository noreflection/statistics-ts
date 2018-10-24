import * as React from 'react';
import './App.css';

// import { Button } from '@material-ui/core';

import Scene from './components/Scene';
// 

import 'typeface-roboto';
import SideBar from './components/SideBar';

// import logo from './logo.svg';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        {/*         <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Button color="primary">go!</Button> */}
        <SideBar />
        <Scene />
       {/*  <div className="scene">
          <SimpleCard />
          <SimpleCard />
          <SimpleCard />
        </div> */}
      </div>
    );
  }
}

export default App;
