import React from 'react';

class Home extends React.Component {
  handleTipping = () => {
    this.props.history.push('/tipping')
  }
  render() {
    return (
      <div>
        <h1>Hello, I'm Tipytip</h1>
        <button type='submit' onClick={this.handleTipping}>Get Started</button>
      </div>
    );
  }
}

export default Home;