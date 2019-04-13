import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import Home from './components/Home';
import Login from './components/Login';
import Users from './components/Users';
import User from './components/User';

class App extends Component {
  render() {
    return (
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">{this.props.siteName}</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul className="navbar-nav">
              <li className="nav-item"><NavLink className="nav-link" to="/">Home</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/users">Users</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/user/1">User Number 1</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/login">Login</NavLink></li>
            </ul>
          </div>
        </nav>


        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/users/:pageNumber?" component={Users} />
        <Route path="/user/:userID" component={User} />

      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    siteName: state.siteName
  }
}

const mapDispatchToProps = disaptch => {
  return {
    changeSiteName(newSiteName) {
      disaptch({
        type: "CHANGE_SITE_NAME",
        payload: newSiteName
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
