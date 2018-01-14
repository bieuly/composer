import React, { Component } from 'react';
import './App.css';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const mainCardStyle = {
  height: '50%',
  width: '30%',
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

const buttonStyle = {
  margin: 20,
};

class App extends Component {

constructor(props) {
    super(props);
    this.state = {
    	entries: []
    };
  }

 addEntry(evt) {
 	var newList = this.state.entries.slice()
	newList.push(evt)
	this.setState({ entries: newList })
	console.log(this.state.entries)
 }

  render() {
    return (
      <div className="App">
      <MuiThemeProvider>
      <AppBar title="COMPOSER"/>
      	<Paper style={mainCardStyle}>
	        <TextField hintText="Sweet Item"/>
          <FloatingActionButton mini={true} style={buttonStyle} onClick={()=>this.addEntry("new")}>
            <ContentAdd />
          </FloatingActionButton>
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
