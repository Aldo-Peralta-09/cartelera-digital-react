import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import './css/header.css';
import './css/footer.css';
import Footer from './components/Footer';
import Signin from './views/users/Signin';
import Signup from './views/users/Signup';
import Users from './views/users/Users';
import Events from './views/events/Events';
import AddEvent from './views/events/AddEvent';

import { 
	BrowserRouter as Router, 
	Route,
	Switch
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header/>
          <Switch>
            <Route exact path="/" component={Signin}/>
            <Route path="/signup" component={Signup}/>
            <Route path="/users" component={Users}/>
            <Route path="/events" component={Events}/>
            <Route path="/add-event" component={AddEvent}/>
          </Switch>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
