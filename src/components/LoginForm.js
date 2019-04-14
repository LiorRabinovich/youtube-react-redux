import React, { Component } from 'react';

class LoginForm extends Component {
    constructor() {
        super();

        this.state = {
            user: {
                email: '',
                password: ''
            }
        }
    }
    handlerChangeUser = (property,value) => {
        let user = this.state.user;
        user[property] = value;

        this.setState({
            user
        })
    }
    render() {
        return (
            <form className="login-form">
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
}

export default LoginForm;