import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

import AppNavBar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

class App extends Component {
  render() {
    return (
      <Router>
        <CssBaseline>
          <div className="App">
            <AppNavBar />
            <Route path='/' exact strict component={Home} />
            <Route path='/about' exact strict component={About} />
            <Route path='/contact' exact strict component={Contact} />
          </div>
        </CssBaseline>
      </Router>
    );
  }
}

export default App;
