//App
import React, {Component} from 'react';
import ItemContainer from './ItemContainer';
import {Switch, Route, Link} from 'React-Router-DOM'

export default class extends Component {
	constructor() {
		super();
		
		this.state = {
			sauces: ["Franks", "Sriracha", "Tobasco"],
			books : ['1984', 'Ulysses', 'Kindred']
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
						<nav className="block">
	            <Link to="/books" >
	              <button className="btn">Get Smart</button>
	            </Link>
	            <Link to="/sauces" className="btn">
	              <button className="btn">Get Spicy</button>
	            </Link>
          	</nav>
						<div className="block">	
							<Switch >
								<Route path="/sauces" render={() => <ItemContainer items={this.state.sauces} view="Sauces"/> } />
								<Route path="/books" render={() => <ItemContainer items={this.state.books}/> } view="Books" />	
								<Route path="/"  exact={true} render={() => <ItemContainer items={[...this.state.sauces, ...this.state.books]} view="Everything"/> } />	
							</Switch>
						</div>
					</div>
				</div>
		)
	}


} 