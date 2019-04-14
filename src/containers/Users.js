import React, {Component} from 'react';
import { connect } from 'react-redux';

class Users extends Component {
    render() {
        return (
            <div className="users-page">
                Users
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

export default connect(mapStateToProps, mapDispatchToProps)(Users);