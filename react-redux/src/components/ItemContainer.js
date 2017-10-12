import React, {Component} from 'react';
import ItemPic from './ItemPic';
import Payment from './Payment';

export default ({item, sauces, books, setItem, sendPayment}) => {
	console.log(item ,sauces)
	return(
		<div>
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
					item ? <Payment whenSubmitted={sendPayment}/> : <div></div>
				}
			</div>
	)
}

