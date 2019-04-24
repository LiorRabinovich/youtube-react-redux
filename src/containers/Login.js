import React, { Component } from 'react';
import { connect } from 'react-redux';

import LoginForm from '../components/LoginForm';

import { loginAction } from '../actions/usersActions';

class Login extends Component {
    constructor() {
        super();

        this.state = {
            msg: 'Hello World',
            isEnableLoginForm: true
        }

        setTimeout(() => {
            this.setState({
                msg: 'Hello World Changed!'
            })
        }, 2000)
    }

    toggleLoginForm = () => {
        this.setState({
            isEnableLoginForm: !this.state.isEnableLoginForm
        });
    }

    handlerLogin = (email,password) => {
        this.props.login(email,password);
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