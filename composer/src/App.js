import React, { Component } from 'react';
import './App.css';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {List, ListItem} from 'material-ui/List';
import TextButtonComponent from './components/TextButtonComponent';
import ReactDOM from 'react-dom';

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
 }

  render() {
    return (
      <div className="App">
      <MuiThemeProvider>
      <AppBar title="COMPOSER"/>
      	<TextButtonComponent addItem={this.addEntry.bind(this)} />
	    <List>
	    	<ListItem primaryText="Test"/>
	    </List>
	  </MuiThemeProvider>
       
      </div>
    );
  }
}

export default App;
