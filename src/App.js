import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import './css/header.css';
import './css/footer.css';
import Footer from './components/Footer';
import Signin from './views/users/Signin';
import Signup from './views/users/Signup';
import Users from './views/users/Users';
import { 
	BrowserRouter as Router, 
	Route,
	Switch,
	Link 
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
          </Switch>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
