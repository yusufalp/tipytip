import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import Tipping from './components/Tipping/Tipping';
import Navbar from './components/Navbar/Navbar';
import { Route, Switch } from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route
            exact path='/'
            component={Home}
          />
          <Route
            path='/tipping'
            component={Tipping}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
