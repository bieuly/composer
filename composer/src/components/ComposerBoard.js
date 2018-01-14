import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

let entryPosition = [0, 0];
let observer = null;

function emitChange() {
  observer(entryPosition);
}

export function moveEntry(toX, toY) {
  entryPosition = [toX, toY];
  emitChange();
}

const mainCardStyle = {
  height: '50%',
  width: '30%',
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

const squareTarget = {
  drop(props, monitor) {
    moveEntry(props.x, props.y);
  }
};

class ComposerBoard extends Component {

constructor(props) {
    super(props);
    };

	render() {
    	return (
	<Paper style={mainCardStyle}>
          {this.props.children}
	</Paper>
)
	}
}

export default DragDropContext(HTML5Backend)(ComposerBoard);
