import React, { Component } from 'react';
import './App.css';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import List from 'material-ui/List';
import TextButtonComponent from './components/TextButtonComponent';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import FlatButton from 'material-ui/FlatButton';
import ComposerBoard from './components/ComposerBoard';
import DraggableListItem from './components/DraggableListItem';
import ReactDOM from 'react-dom';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { Draggable, Droppable } from 'react-drag-and-drop'
import Paper from 'material-ui/Paper';
import { ListItem } from 'material-ui/List';

const listStyle = {
	width: 300,
	position: "absolute",
	right: 40,
}

const paperStyle ={
	width: 600,
	margin: 'auto',
	padding: 30
}

class App extends Component {

constructor(props) {
    super(props);
    this.state = {
    	entries: [],
    	composedEntries: []
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

  printDocument() {
    const input = document.getElementById('divToPrint');
    html2canvas(input).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'JPEG', 0, 0);
        // pdf.output('dataurlnewwindow');
        pdf.save("download.pdf");
      })
    ;
  }

onDrop(data) {
    var newList = this.state.composedEntries.slice();
	newList.push(data.item);
	this.setState({ composedEntries: newList });
	console.log(data.item)
    }

  render() {
    return (
      <div className="App">
      <MuiThemeProvider>
      <AppBar title="COMPOSER by Billy"/>
      	<TextButtonComponent addItem={this.addEntry.bind(this)} />
	    <List style={listStyle}>
	    	{this.state.entries.map(function(item, i) {
     			return <Draggable type="item" data={item}><ListItem primaryText={item}></ListItem></Draggable>
   			})}
	    </List>
		<FlatButton backgroundColor="#a4c639" label="PDF" secondary={true} onClick={()=>this.printDocument()}/>
		<Droppable
				style={paperStyle}
                types={['item']} // <= allowed drop types 
                onDrop={this.onDrop.bind(this)}>
                <Paper id="divToPrint" style={paperStyle}>
                	<List id="composed">
				    	{this.state.composedEntries.map(function(item, i) {
			     			return <ListItem primaryText={item} />
			   			})}
				    </List>
                </Paper>
            </Droppable>
	  </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
