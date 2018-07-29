import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router-dom';

class DummyPage extends Component {

    render() {
        return (
            <div>
                This is a dummy page
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
    return bindActionCreators({}, dispatch);

};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DummyPage));