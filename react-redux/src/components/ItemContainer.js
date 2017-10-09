//SauceContainer

import React, {Component} from 'react';
import ItemPic from './ItemPic';

export default class extends Component {
	constructor(props) {
		super(props)

		this.state = {
			selectedItem : ''
		}

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({
			selectedItem : event.target.value
		})
	}


	render() {
		return(
			<div className="item-container" >
				{
					this.state.selectedItem ?	<ItemPic item={this.state.selectedItem}/> : <h2>Select an Item</h2>
				}
				
				<div >
					<label>
						Select a Product:
						<select onChange={this.handleChange}>
							<option value=""></option>
							{
								this.props.items.map((item, idx) => {
									return <option value={item} key={idx}>{item}</option>
								})
							}
						</select>
					</label>
					{
						this.state.selectedItem ?	<button className="btn" onClick={() => this.props.addItem(this.state.selectedItem)}>Add to Cart</button> : null
					}
					
				</div>
			</div>
		)
	}
}