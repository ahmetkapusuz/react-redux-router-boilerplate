import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {withRouter, Link} from 'react-router-dom';
import {List} from "../components/List";
import {fetchUsers} from "../actions";

class UserList extends Component {

    constructor(props) {
        super(props);
        this.fetchUsers = this.fetchUsers.bind(this);
        this.state = {
            users: []
        };
    }

    componentWillReceiveProps(nextProps) {
        if (!this.props.users && nextProps.users) {
            this.setState({
                users: nextProps.users
            });
        }
    }

    fetchUsers() {
        this.props.fetchUsers();
    }

    render() {
        return (
            <div>
                <button onClick={this.fetchUsers}>Get Users</button>
                <Link to="/dummy">
                    <button>Dummy Page</button>
                </Link>

                <List title='User List' items={this.state.users}/>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        users: state.UserReducer.users
    }
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({fetchUsers}, dispatch);

};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserList));