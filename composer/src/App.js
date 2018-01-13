import React, { Component } from 'react';
import './App.css';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';

const mainCardStyle = {
  height: '50%',
  width: '30%',
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

class App extends Component {
  render() {
    return (
      <div className="App">
      <MuiThemeProvider>
      <AppBar title="COMPOSER"/>
      	<Paper style={mainCardStyle}>
	        <TextField hintText="Sweet Item"/>
	    </Paper>
	    <List>
	    	<ListItem primaryText="Test"/>
	    </List>
	  </MuiThemeProvider>
       
      </div>
    );
  }
}

export default App;
