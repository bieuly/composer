import React, { Component } from 'react';

const mainCardStyle = {
  height: '50%',
  width: '30%',
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

class ComposerBoard extends Component {

constructor(props) {
    super(props);
    };
  }


	render() {
    	return (
	
	<Paper style={mainCardStyle}>
  {this.props.children}
	</Paper>
)
	}
}

export default ComposerBoard;