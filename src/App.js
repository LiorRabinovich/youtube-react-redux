import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">{this.props.siteName}</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-item nav-link active" href="#">Home</a>
              <a className="nav-item nav-link" href="#">Users</a>
            </div>
          </div>
        </nav>
      </div>
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
