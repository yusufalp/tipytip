import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/tipping'>Tip</Link>
        </nav>
      </div>
    );
  }
}

export default Navbar;