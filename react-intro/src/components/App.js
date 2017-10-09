//App
import React, {Component} from 'react';
import ItemContainer from './ItemContainer';

export default class extends Component {
	constructor() {
		super();
		this.state = {
			sauces : ["Franks", "Sriracha", "Tobasco"]
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
		return (
			<div>	
				<h1>A Somewhat {this.state.adj} Site</h1>
				<div className="clearfix">
					<div className="block">
						<ItemContainer items={this.state.sauces}/>
					</div>
				</div>
			</div>
		)
	}


} 