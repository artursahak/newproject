import React from 'react';
import ReactDOM from 'react-dom';

class Car extends React.Component{
	constructor() {
		super();
		this.state={color:"red",color2:"blue"};
	}
	render() {
		return <h2>Hi, I am a {this.state.color2} Car!</h2>;
	}
}

ReactDOM.render(<Car color="red" />, document.getElementById('root'));
