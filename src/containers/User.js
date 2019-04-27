import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getUserAction } from '../actions/usersActions';

class User extends Component {

    componentWillMount() {
        this.props.getUser(this.userID);        
    }

    componentDidUpdate(prevProps) {
        if(prevProps.match.params.userID !== this.userID) {
            this.props.getUser(this.userID);
        }
    }

    get userID() {
        return this.props.match.params.userID;
    }

    render() {
        return (
            <div className="user-page">
                <div className="card">
                    <img className="card-img-top" src={this.props.user.avatar} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">#{this.props.user.id} {this.props.user.first_name} {this.props.user.last_name}</h5>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.usersReducer.userActive
    }
}

const mapDispatchToProps = disaptch => {
    return {
        getUser(userID) {
            disaptch(getUserAction(userID));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(User);