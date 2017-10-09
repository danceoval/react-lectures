import React, {Component} from 'react'

export default class extends Component {
  constructor(props){
    super(props)
    this.state = {
      ccn: '',
      type: ''
    }

    this.handleCCN = this.handleCCN.bind(this)
    this.handleType = this.handleType.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleCCN(e) {
    console.log("CCN", e.target.value)
    this.setState({ccn: e.target.value})
  }

  handleType(e) {
    console.log('TYPE', e.target.value)
    this.setState({type: e.target.value})
  }

  handleSubmit(e) {
    e? e.preventDefault() : null;
    this.props.whenSubmitted(this.state)
  }

  render() {
    return(
      <div>
        <h3>Your Cart: </h3>
        <ol>
        {
          Object.keys(this.props.order).map((item, i) => (
            <div key={i}>
              <strong>{item}</strong> : <span>{this.props.order[item]}</span>
            </div>
          ))
        }
        </ol>
        <form id="credit-card-form" onSubmit={this.handleSubmit}>
          <br />
          <div>
            <label>CCN: </label>
            <input type="text"
                name="ccn"
                onChange={this.handleCCN}
            />
          </div>
          <br />
          <div>
            <label>Card Type: </label>
            <select type="text"name="type" onChange={this.handleType}>
              <option></option>
              <option>Visa</option>
              <option>MasterCard</option>
              <option>Amex</option>
            </select>
          </div>
          <br />
          <button type="submit">Submit Order</button>
        </form>
      </div>

    )
  }
}