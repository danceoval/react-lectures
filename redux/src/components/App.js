//App
import React, {Component} from 'react';
import {Switch, Route, Link} from 'React-Router-DOM';

import ItemContainer from './ItemContainer';
import Payment from './Payment';
import store from '../redux/store';
import {setItem, sendPayment} from '../redux/action-creators/actions';


export default class extends Component {
	constructor() {
		super();
		
		this.state = store.getState();

		this.addItem = this.addItem.bind(this);

	}

	handlePayment(info) {
		console.log('what we will send', info)
		store.dispatch(sendPayment(info))	
	}

	addItem(item) {

		// let list = Object.keys(this.state.order);
		// let newOrder = Object.assign({}, this.state.order);
		// if(list.indexOf(item) != -1) {
		// 	newOrder[item] += 1;
		// 	this.setState({
		// 		order: newOrder
		// 	});
		// } else {
		// 	newOrder[item] = 1;
		// 	this.setState({
		// 		order : newOrder
		// 	});
		// }

	}

	componentDidMount() {
		store.subscribe(() => {
			this.setState(store.getState())
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