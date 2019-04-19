import React, { Component } from 'react';

class LoginForm extends Component {
    constructor(props) {
        super();

        this.state = {
            user: {
                email: '',
                password: ''
            }
        }

        console.log('constructor', props);
    }
    handlerChangeUser = (property, value) => {
        let user = this.state.user;
        user[property] = value;

        this.setState({
            user
        })
    }

    componentWillMount() {
        console.log('componentWillMount');
    }

    render() {
        console.log('render');
        return (
            <form className="login-form">
                <div className="alert alert-primary">
                    {this.props.msg}
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" value={this.state.user.email} onChange={(e) => this.handlerChangeUser('email', e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" value={this.state.user.password} onChange={(e) => this.handlerChangeUser('password', e.target.value)} className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        )
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps', nextProps);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate', nextProps, nextState);

        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate', nextProps, nextState);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate', prevProps, prevState);
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }
}


export default LoginForm;