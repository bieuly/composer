import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import { DragDropContext } from 'react-dnd';
import { DropTarget } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import {List} from 'material-ui/List';
// const mainCardStyle = {
//   height: 400,
//   width: 100,
//   margin: 20,
//   textAlign: 'center',
//   display: 'inline-block',
// };

class ComposerBoard extends Component {

constructor(props) {
    super(props);
    this.state = {
      entries: []
    };
};

	render() {
    	return (
	<Paper>
    <List>
      
    </List>
	</Paper>
)
	}
}

export default DragDropContext(HTML5Backend)(ComposerBoard);
