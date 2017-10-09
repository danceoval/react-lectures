//SauceContainer

import React, {Component} from 'react';
import ItemPic from './ItemPic';

export default (props) => {
	console.log("PROPS", props)
	const selected = props.selectedItem;
	const setItem = props.setItem;
	const items = props.items;
	const addItem = props.addItem;

	return (
		<div className="item-container" >
				{
					selected ?	<ItemPic item={selected}/> : <h2>Select an Item</h2>
				}
				
				<div >
					<label>
						Select a Product:
						<select onChange={(e) => setItem(e.target.value)}>
							<option value=""></option>
							{
								items.map((item, idx) => {
									return <option value={item} key={idx}>{item}</option>
								})
							}
						</select>
					</label>
					{
						selected ?	<button className="btn" onClick={() => addItem(selected)}>Add to Cart</button> : null
					}
					
				</div>
			</div>

	)
}

