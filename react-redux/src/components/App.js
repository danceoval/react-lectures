//App
import React, {Component} from 'react';
import {Switch, Route, Link} from 'React-Router-DOM';
import {connect} from 'react-redux';

import ItemContainer from './ItemContainer';
import Payment from './Payment';
import {setItem, sendPayment, updateOrder} from '../../redux/action-creators/actions';


class App extends Component {
	constructor() {
		super();
	}

	handlePayment(info) {
		console.log('what we will send', info)
		sendPayment(info)	
	}

	addItem(item) {

		let list = Object.keys(this.state.order);
		let newOrder = Object.assign({}, this.state.order);
		if(list.indexOf(item) != -1) {
			newOrder[item] += 1;
		} else {
			newOrder[item] = 1;
		}
		updateOrder(newOrder)

	}

	render() {
		return (
				<div>	
					<h1>A Somewhat Saucey Site</h1>
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
								<Route view="sauces" path="/sauces" render={() => <ItemContainer items={this.props.sauces} setItem={this.props.setItem} addItem={this.props.addItem} selectedItem={this.props.item}/> }/>
								<Route view="books" path="/books" render={() => <ItemContainer items={this.props.books} setItem={this.props.setItem} addItem={this.props.addItem}  selectedItem={this.props.item} /> } />	
								<Route view="checkout" path="/checkout" render={() => <Payment whenSubmitted={this.handlePayment} order={this.props.order}/> } />	
								<Route view="all" path="/"  exact={true} render={() => <ItemContainer items={[...this.props.sauces, ...this.props.books]} setItem={this.props.setItem} addItem={this.props.addItem} selectedItem={this.props.item} /> } />	
							</Switch>
						</div>
					</div>
				</div>
		)
	}

}

const mapState = ({item, sauces, books, order, paymentInfo}) => ({item, sauces, books, order, paymentInfo})
const mapDispatch = { setItem, sendPayment, updateOrder }

export default connect(mapState, mapDispatch)(App) 