import React, { Component } from 'react';

class LoginForm extends Component {
    constructor(props) {
        super();

        this.state = {
            user: {
                email: '',
                password: ''
            },
            msgLocal: 'Local Message'
        }
    }
    handlerChangeUser = (property, value) => {
        let user = this.state.user;
        user[property] = value;

        this.setState({
            user
        })
    }

    changeLocalMsg = (e) => {
        e.preventDefault();
        this.setState({
            msgLocal: this.state.msgLocal + "1"
        })
    }

    render() {
        return (
            <form className="login-form">
                <div className="alert alert-primary">
                    {this.props.msg}
                </div>
                <div className="alert alert-success">
                    {this.state.msgLocal}
                </div>
                <button onClick={this.changeLocalMsg}>Change Local MSG</button>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" value={this.state.user.email} onChange={(e) => this.handlerChangeUser('email', e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" value={this.state.user.password} onChange={(e) => this.handlerChangeUser('password', e.target.value)} className="form-control" id="exampleInputPassword1" placeholder="Password" autoComplete="true" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        )
    }
}


export default LoginForm;