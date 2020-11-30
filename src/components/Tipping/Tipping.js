import React from 'react';
import Result from '../Result/Result';
import './Tipping.css';

class Tipping extends React.Component {
  state = {
    amount: 0,
    percent: 15,
    isCalculated: false
  }
  showResult = (e) => {
    e.preventDefault();
    this.setState({
      isCalculated: true
    })
    
  }
  handleAmountChange = (value) => {
    this.setState({
      amount: value
    })
  }
  handlePercentChange = (value) => {
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
            />
          </label>
          <label htmlFor='/amount'>
            Enter Percent
          <input
              id='amount'
              type='number'
              value={this.state.percent}
              onChange={e => this.handlePercentChange(e.target.value)}
            />
          </label>
          <button type='submit' onClick={e => this.showResult(e)}>Calculate</button>
        </form>
        <div className={this.state.isCalculated ? '' : 'hidden'}>
          <Result amount={this.state.amount} percent={this.state.percent}/>
        </div>
      </div>
    );
  }
}

export default Tipping;
