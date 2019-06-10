import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';

class App extends Component {
  render() {
    return (
      <HashRouter basename='/'>
          <div className="App">
            <Route path='/' exact strict component={Home} />
            <Route path='/contact' exact strict component={Contact} />
          </div>
      </HashRouter>
    );
  }
}

export default App;
