//SauceContainer

import React, {Component} from 'react';
import ItemPic from './ItemPic';

export default ({selectedItem, setItem, items, addItem}) => {
	console.log('**', setItem, items, addItem)
	return (
		<div className="item-container" >
				{
					selectedItem ?	<ItemPic item={selectedItem}/> : <h2>Select an Item</h2>
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
						selectedItem ?	<button className="btn" onClick={() => addItem(selectedItem)}>Add to Cart</button> : null
					}
					
				</div>
			</div>

	)
}

