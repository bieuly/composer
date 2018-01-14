import React, { Component } from 'react';
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

class TextButtonComponent extends Component {

constructor(props) {
    super(props);
    this.state = {
    	value: ""
    };
  }


	render() {
    	return (
	
	<Paper style={mainCardStyle}>
	        <TextField hintText="Item" value={this.state.value} onChange={()=>{this.state.value=this.props.value}} />
          <FloatingActionButton mini={true} style={buttonStyle} onClick={()=>this.props.addItem(this.state.value)}>
            <ContentAdd />
          </FloatingActionButton>
	    </Paper>
)
	}
}

export default TextButtonComponent;