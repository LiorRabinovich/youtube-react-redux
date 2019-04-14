import React, {Component} from 'react';
import { connect } from 'react-redux';

import LoginForm from '../components/LoginForm';

class Login extends Component {
    render() {
        return (
            <div className="login-page">
                <LoginForm />
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