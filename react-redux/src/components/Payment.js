import React, {Component} from 'react';


export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ccn: '',
      type : ''
    }

    this.handleCCN = this.handleCCN.bind(this);
    this.handleType = this.handleType.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleCCN(e) {
    let num = e.target.value
    this.setState({ccn : num })
  }

  handleType(e) {
    this.setState({type : e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("the state", this.state)
    this.props.whenSubmitted(this.state)
  }

  render () {

    return(
      <form id="credit-card-form" onSubmit={this.handleSubmit} >
        <br />
        <div>
          <label>CCN: </label>
          <input 
            type="text"
            name="ccn"
            onChange={this.handleCCN}
          />
        </div>
        <br />
        <div>
          <label>Card Type: </label>
          <select type="text" name="type" onChange={this.handleType}>
            <option></option>
            <option>Visa</option>
            <option>MasterCard</option>
            <option>AmEx</option>
          </select>
        </div>
        <br />
        <button type='submit' >Submit Order</button>
      </form>

    )
  }
}