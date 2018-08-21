import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as usersActions from '../../actions/users';
import ListUser from "./module/ListUser";

class Home extends Component {
  componentDidMount() {
    this.props.dispatchGetUser();
  }

  render() {
    const {loading, users} = this.props;
    return (
      <ListUser {...this.props} loading={loading} users={users}/>
    );
  }
}

const mapStateToProps = ({users}) => ({
  loading: users.fetching,
  users: users.payload
});

const mapDispatchToProps = dispatch => ({
  dispatchGetUser: bindActionCreators(usersActions.usersRequest, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
