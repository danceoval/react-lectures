import React, {Component} from 'react';
import ItemPic from './ItemPic';
import Payment from './Payment'

const constructOrder = (item, order, updateFn) => {
	let list = Object.keys(order);
	let newOrder = Object.assign({}, order);
	console.log("order", newOrder)
	if(list.indexOf(item) != -1) {
		newOrder[item] += 1;
	} else {
		newOrder[item] = 1;
	}
	updateFn(newOrder)
}

export default ({item, sauces, books, order, setItem, sendPayment, updateOrder}) => {
	console.log(item ,sauces)
	return(
		<div>
			<div className="block">
				{
					item ? <ItemPic item={item} /> : <h2>N/A</h2>
				}
				<div>
					<label>	
						Select an Item:
						<select onChange={(e) => setItem(e.target.value)}>
							<option value="">None</option>
							]
							{
								[...sauces, ...books].map((item, idx) => {
									return <option value={item} key={idx}>{item}</option>
								})
							}
						</select>
					</label>
				</div>
				{
					item ? <button onClick={() => constructOrder(item, order, updateOrder)}>Add to Card</button> : <div></div>
				}
			</div>
			<div className="big-block">
				<Payment order={order}/>
			</div>
		</div>
	)
}

