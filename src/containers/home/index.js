import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {usersRequest} from '../../actions/users';
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
  users: users.payload.list
});


const mapDispatchToProps = dispatch => (
  bindActionCreators({
    dispatchGetUser: () => usersRequest({method: 'GET'})
  }, dispatch)
);


export default connect(mapStateToProps, mapDispatchToProps)(Home);
