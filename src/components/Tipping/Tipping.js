import React from 'react';
import Result from '../Result/Result';
import './Tipping.css';

class Tipping extends React.Component {
  state = {
    amount: 0,
    percent: 15,
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
  handlePercentChange = (value) => {
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
  render() {
    console.log(this.state.percent)
    return (
      <div>
        <h1>Tip</h1>
        <form>
          <label htmlFor='/amount'>
            Amount
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
          <label htmlFor='/amount'>
            Enter Percent
          <input
              id='amount'
              type='number'
              value={this.state.percent}
              min='0'
              max='100'
              onChange={e => this.handlePercentChange(e.target.value)}
              required
            />
          </label>
          <p className={this.state.percentError ? '' : 'hidden'}>{this.state.percentError}</p>
          <button type='submit' onClick={e => this.showResult(e)}>Calculate</button>
        </form>
        <div className={this.state.isCalculated ? '' : 'hidden'}>
          <Result amount={this.state.amount} percent={this.state.percent} />
        </div>
      </div>
    );
  }
}

export default Tipping;
