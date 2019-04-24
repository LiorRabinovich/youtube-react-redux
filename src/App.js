import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';

import { changeSiteName } from './actions/sitesActions';

import Home from './containers/Home';
import Login from './containers/Login';
import Users from './containers/Users';
import User from './containers/User';

class App extends Component {

  handlerChangeSiteName = () => {
    console.log('handlerChangeSiteName');
    this.props.changeSiteName('New Site Name');
  }

  render() {
    return (
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5">
          <Link to="/">{this.props.siteName}</Link>
          <button onClick={this.handlerChangeSiteName}>ChangeSiteName</button>
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

        <div className="container">
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/users/:pageNumber?" component={Users} />
          <Route path="/user/:userID" component={User} />
        </div>

      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    siteName: state.sitesReducer.siteName
  }
}

const mapDispatchToProps = disaptch => {
  return {
    changeSiteName(newSiteName) {
      console.log('changeSiteName - Dispatch With Action');
      disaptch(changeSiteName(newSiteName))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
