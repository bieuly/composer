import React, { Component } from 'react';
import './App.css';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {List, ListItem} from 'material-ui/List';
import TextButtonComponent from './components/TextButtonComponent';
import ComposerBoard from './components/ComposerBoard';
import DraggableListItem from './components/DraggableListItem';
import ReactDOM from 'react-dom';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

const listStyle = {
	width: 300,
	position: "absolute",
	right: 40,
}


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

 removeEntry(evt) {
 	var index = this.state.indexOf(evt);
 	if (index > -1) {
    	var newEntries = this.state.entries.splice(index, 1);
    	this.setState({entries: newEntries})
	}
 }

  render() {
    return (
      <div className="App">
      <MuiThemeProvider>
      <AppBar title="COMPOSER by Billy"/>
      	<TextButtonComponent addItem={this.addEntry.bind(this)} />
	    <List style={listStyle}>
	    	{this.state.entries.map(function(item, i) {
     			return <DraggableListItem itemText={item}/>
   			})}
	    </List>
      <ComposerBoard>
      </ComposerBoard>
	  </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
