//SauceContainer

import React, {Component} from 'react';
import SaucePic from './SaucePic';

export default class extends Component {
	constructor(props) {
		super(props)

		this.state = {
			selectedSauce : ''
		}

		this.handleChange = this.handleChange.bind(this);
		this.sillyMsg = this.sillyMsg.bind(this)
	}

	handleChange(event) {
		// console.log("ch-ch-changes", event.target.value)
		// console.log("this in change", this)
		this.setState({
			selectedSauce : event.target.value
		})
	}

	sillyMsg() {
		console.log("Silly Sauce")
	}



	render() {
		return(
			<div className="sauce-container" onClick={this.sillyMsg}>
				{
					this.state.selectedSauce ?	<SaucePic sauce={this.state.selectedSauce}/> : <h2>Select a Sauce</h2>
				}
				
				<div >
					<label>
						Select a Sauce:
						<select onChange={this.handleChange}>
							<option value=""></option>
							{
								this.props.sauces.map((sauce, idx) => {
									return <option value={sauce} key={idx}>{sauce}</option>
								})
							}
						</select>
					</label>
				</div>
			</div>
		)
	}
}