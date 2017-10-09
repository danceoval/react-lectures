//SauceContainer

import React, {Component} from 'react';
import SaucePic from './SaucePic';

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
			<div className="sauce-container" onClick={this.sillyMsg}>
				{
					this.state.selectedItem ?	<ItemPic item={this.state.selectedItem}/> : <h2>Select a Product</h2>
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
				</div>
			</div>
		)
	}
}