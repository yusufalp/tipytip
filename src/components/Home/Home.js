import React from 'react';
import Description from '../Description/Description';

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, I'm Tipytip</h1>
        <div className={this.props.isStarted ? 'hidden' : ''}>
          <Description />
        </div>
        <button onClick={this.props.start}>Get Started</button>
      </div>
    );
  }
}

export default Home;