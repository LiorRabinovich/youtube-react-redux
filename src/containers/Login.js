import React, { Component } from 'react';
import { connect } from 'react-redux';

import LoginForm from '../components/LoginForm';

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

    render() {
        let loginForm = '';
        if (this.state.isEnableLoginForm) {
            loginForm = <LoginForm msg={this.state.msg} />;
        }

        return (
            <div className="login-page">
                {loginForm}
                <button onClick={this.toggleLoginForm}>Toggle Login Form</button>
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

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);