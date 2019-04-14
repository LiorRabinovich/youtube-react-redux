import React, {Component} from 'react';
import { connect } from 'react-redux';

class User extends Component {
    render() {
        return (
            <div className="user-page">
                User
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

export default connect(mapStateToProps, mapDispatchToProps)(User);