//App
import React, {Component} from 'react';
import SauceContainer from './SauceContainer';

export default class extends Component {
	constructor() {
		super();
		this.state = {
			sauceList : ["Franks", "Sriracha", "Tobasco"]
		}
	}

	componentDidMount() {
		let adjs = ['Silly', 'Saucey', 'Sarcastic', 'Spicy'];
		let idx = Math.floor(Math.random() * adjs.length)
		let adj = adjs[idx];
		this.setState({
			adj
		})
	}

	render() {
		//console.log("state", this.state)
		return (
			<div>	
				<h1>A Somewhat {this.state.adj} Site</h1>
				<div className="clearfix">
					<div className="block">
						<SauceContainer sauces={this.state.sauceList}/>
					</div>
					<div className="block">
						<SauceContainer sauces={this.state.sauceList.slice(1,2)}/>
					</div>
					<div className="block">
						<SauceContainer sauces={this.state.sauceList.slice(2)}/>
					</div>
				</div>
			</div>
		)
	}


} 