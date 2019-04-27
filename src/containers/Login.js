import React, { Component } from 'react';
import { connect } from 'react-redux';

import LoginForm from '../components/LoginForm';

import { loginAction } from '../actions/usersActions';

class Login extends Component {

    componentWillMount() {
        if(this.props.isLogged === true) {
            this.props.history.push('/');
        }
    }

    handlerLogin = (email,password) => {
        this.props.login(email,password);
        this.props.history.push('/');
    }

    render() {
        return (
            <div className="login-page">
                <LoginForm handlerLogin={this.handlerLogin} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isLogged: state.usersReducer.isLogged
    }
}

const mapDispatchToProps = disaptch => {
    return {
        login: (email,password) => {
            disaptch(loginAction(email,password));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);