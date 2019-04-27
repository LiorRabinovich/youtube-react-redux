import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getUsersAction } from '../actions/usersActions';

class Users extends Component {

    componentWillMount() {
        this.props.getUsers(this.pageNumber);
    }

    get pageNumber() {
        const isPageNumberExist = typeof this.props.match.params.pageNumber !== 'undefined';
        return (isPageNumberExist ? this.props.match.params.pageNumber : 1);
    }

    render() {
        const pagesButtonsRender = this.getPagesButtonsRender();
        return (
            <div className="users-page">
                <table className="table table-hover table-dark">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.users.data.map((user, userIndex) =>
                            <tr key={userIndex}>
                                <th scope="row">{user.id}</th>
                                <td><span className="pointer" onClick={() => this.handlerClickUser(user.id)}>{user.first_name}</span></td>
                                <td>{user.last_name}</td>
                            </tr>
                        )}
                    </tbody>
                </table>

                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        {pagesButtonsRender}
                    </ul>
                </nav>
            </div>
        )
    }

    getPagesButtonsRender() {
        let pagesButtonsRender = [];
        for (let i = 1; i <= this.props.users.total_pages; i++) {
            pagesButtonsRender.push(<li key={i} className="page-item">
                <button className="page-link" onClick={() => this.handlerClickPage(i)}>{i}</button>
            </li>);
        }
        return pagesButtonsRender;
    }

    handlerClickPage(pageNumber) {
        if (this.props.users.page !== pageNumber) {
            this.props.history.push(`/users/${pageNumber}`);
            this.props.getUsers(pageNumber);
        }
    }

    handlerClickUser(userID) {
        this.props.history.push(`/user/${userID}`);
    }
}

const mapStateToProps = state => {
    return {
        users: state.usersReducer.users
    }
}

const mapDispatchToProps = disaptch => {
    return {
        getUsers(pageNumber) {
            disaptch(getUsersAction(pageNumber));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);