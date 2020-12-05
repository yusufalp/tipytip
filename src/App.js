import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import Tipping from './components/Tipping/Tipping';

class App extends React.Component {
  state = {
    isStarted: false
  }
  handleStart = () => {
    this.setState({
      isStarted: true
    })
  }
  handleReset = () => {
    this.setState({
      isStarted: false
    })
  }
  render() {
    return (
      <div className="App">
        <Home start={this.handleStart} isStarted={this.state.isStarted}/>
        <div className={this.state.isStarted ? '' : 'hidden'}>
          <Tipping reset={this.handleReset} />
        </div>
      </div>
    );
  }
}

export default App;
