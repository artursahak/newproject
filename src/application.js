import React from 'react';
import nw from './manhattan.jpg';
import nw1 from './manhattan3.jpg';
import nw2 from './manhattan2.jpg';

class App1 extends React.Component{
	render(){
		return (
			<div>
			<p className = "app-1">Hello </p>
			<img src = {nw} className="img3" id="n0"/>
			</div>
			)
	}
}
class App2 extends React.Component{
	render(){
		return (
		<div>
			<p className = "app-1">Բարև </p>
				<img src = {nw1} className="img3" id="n1"/>
				</div>
			)
	}
}
class App3 extends React.Component{
	render(){
		return (
			<div>
			<p className = "app-1">Доброе  </p>
				<img src = {nw2} className="img3" id="n2"/>
				</div>
			)
	}
}

export {App1,App2,App3};