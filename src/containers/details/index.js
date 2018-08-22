import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Grid} from 'semantic-ui-react'
import {userDetailsRequest} from '../../actions/app';
import {Profile} from "./module/Profile";
import BackButton from "../../components/BackButton";
import MenuDetails from './module/Menu';
import {Route, Switch} from 'react-router-dom';
import PostsWrapper from "../posts";
import AlbumsWrapper from "../albums";

class Details extends Component {
  constructor(props) {
    super(props);
    this.userId = props.computedMatch.params.id;
  }

  componentDidMount() {
    const data = {
      userId: this.userId
    };
    this.props.dispatchGetUser(data);
  }

  render() {
    const activeItem = this.props.path.split('/')[3];
    const {loading, user} = this.props;
    return (
      <div className="w-100">
        <BackButton path={'/'}/>
        <Grid>
          <Grid.Column mobile={16} tablet={5} computer={5}>
            <div className="d-flex j-c-s">
              <Profile loading={loading} user={user}/>
              <MenuDetails userId={this.userId} active={activeItem}/>
            </div>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={11} computer={11}>

            <Switch>
              <Route path="/user/:id/posts" component={PostsWrapper}/>
              <Route path="/user/:id/albums" component={AlbumsWrapper}/>
            </Switch>

          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = ({users}) => ({
  loading: users.fetching,
  user: users.payload.selected
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    dispatchGetUser: (data) => userDetailsRequest({method: 'GET_ID', data})
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Details);
