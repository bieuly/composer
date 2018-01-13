import React, { Component } from 'react';
import './App.css';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    return (
      <div className="App">
      <MuiThemeProvider>
        <AppBar/>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
