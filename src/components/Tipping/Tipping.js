import React from 'react';
import './Tipping.css';

class Tipping extends React.Component {
  state = {
    amount: 1,
    percent: 0,
    tip: 1,
    isCalculated: false,
    percentError: '',
    amountError: ''
  }
  showResult = (e) => {
    e.preventDefault();
    this.setState({
      isCalculated: true
    })

  }
  handleAmountChange = (value) => {
    if (value < 0) {
      this.setState({
        amountError: 'Must be a positive number'
      })
      return
    } else {
      this.setState({
        amountError: ''
      })
    }
    this.setState({
      amount: value
    })
  }
  handleTipPercentChange = (value) => {
    if (value < 0 || value > 100) {
      this.setState({
        percentError: 'Must be between 1 and 100'
      })
      return
    } else {
      this.setState({
        percentError: ''
      })
    }
    this.setState({
      percent: value
    })
  }
  handleTipAmountChange = (value) => {
    this.setState({
      tip: value
    })
  }
  render() {
    return (
      <div>
        <h1>Tip</h1>
        <form>
          <label htmlFor='amount'>
            Amount: 
          <input
              id='amount'
              type='number'
              value={this.state.amount}
              min='0'
              step='.01'
              onChange={e => this.handleAmountChange(e.target.value)}
              required
            />
          </label>
          <p className={this.state.amountError ? '' : 'hidden'}>{this.state.amountError}</p>
          <label htmlFor='tip-percent'>
            If you tip 
          <input
              id='tip-percent'
              type='number'
              value={this.state.percent}
              min='0'
              max='100'
              onChange={e => this.handleTipPercentChange(e.target.value)}
              required
            /> %, your tip will be ${Math.floor(this.state.amount * this.state.percent) / 100}
          </label>
          <label htmlFor='tip-amount'>
            If you tip $
          <input
              id='tip-amount'
              type='number'
              value={this.state.tip}
              min='0'
              step='.01'
              onChange={e => this.handleTipAmountChange(e.target.value)}
              required
            /> , that is {(Math.floor(this.state.tip / this.state.amount * 10000)) / 100}% of your bill
          </label>
          <p className={this.state.percentError ? '' : 'hidden'}>{this.state.percentError}</p>
          <button onClick={this.props.reset}>Start Over</button>
        </form>
      </div>
    );
  }
}

export default Tipping;
