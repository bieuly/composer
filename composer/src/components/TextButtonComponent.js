import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
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

handleOnChange(evt) {
  this.setState({value: evt.target.value})
}

	render() {
    	return (
	
	<Paper style={mainCardStyle}>
	        <TextField hintText="Item" onChange={this.handleOnChange.bind(this)} />
          <FloatingActionButton mini={true} style={buttonStyle} onClick={()=>this.props.addItem(this.state.value)}>
            <ContentAdd />
          </FloatingActionButton>
	    </Paper>
)
	}
}

export default TextButtonComponent;