import React, { Component } from 'react';
import ListItem from 'material-ui/List';

const listItemStyle = {
  borderLeftWidth: '1px',
  borderTopWidth: '0px',
  borderRightWidth: '0px',
  borderBottomWidth: '0px',
  borderStyle: 'solid',
  borderColor: '#00BFFF',
  text: 'black',
}

class DraggableListItem extends Component {

constructor(props) {
    super(props);
  }

	render() {
    	return (
	<ListItem primaryText={this.props.itemText} style={listItemStyle} />
)
	}
}

export default DraggableListItem;