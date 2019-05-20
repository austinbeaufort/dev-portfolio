import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';

class App extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <CssBaseline>
          <div className="App">
            <Route path='/' exact strict component={Home} />
            <Route path='/contact' exact strict component={Contact} />
          </div>
        </CssBaseline>
      </HashRouter>
    );
  }
}

export default App;
