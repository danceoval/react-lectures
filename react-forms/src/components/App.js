//App
import React, {Component} from 'react';
import {Switch, Route, Link} from 'React-Router-DOM';

import ItemContainer from './ItemContainer';
import Payment from './Payment';


export default class extends Component {
	constructor() {
		super();
		
		this.state = {
			sauces: ["Franks", "Sriracha", "Tobasco"],
			books : ['1984', 'Ulysses', 'Kindred'],
			order: {}
		}

		this.addItem = this.addItem.bind(this);
		console.log("the state", this.state)
	}

	handlePayment(info) {
		console.log('what we will send', info)
		alert('Order will be delivered by drone something async is gonna happen')		
	}

	addItem(item) {

		let list = Object.keys(this.state.order);
		let newOrder = Object.assign({}, this.state.order);
		if(list.indexOf(item) != -1) {
			newOrder[item] += 1;
			this.setState({
				order: newOrder
			});
		} else {
			newOrder[item] = 1;
			this.setState({
				order : newOrder
			});
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
						<nav className="big-block">
	            <Link to="/books" >
	              <button className="btn">Get Smart</button>
	            </Link>
	            <Link to="/sauces" className="btn">
	              <button className="btn">Get Spicy</button>
	            </Link>
	            <Link to="/checkout" className="btn">
	              <button className="btn">Checkout</button>
	            </Link>
          	</nav>
						<div className="block">	
							<Switch >
								<Route view="sauces" path="/sauces" render={() => <ItemContainer items={this.state.sauces} addItem={this.addItem} /> }/>
								<Route view="books" path="/books" render={() => <ItemContainer items={this.state.books} addItem={this.addItem}  /> } />	
								<Route view="checkout" path="/checkout" render={() => <Payment whenSubmitted={this.handlePayment} order={this.state.order}/> } />	
								<Route view="all" path="/"  exact={true} render={() => <ItemContainer items={[...this.state.sauces, ...this.state.books]} addItem={this.addItem} /> } />	
							</Switch>
						</div>
					</div>
				</div>
		)
	}


} 