import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Segment, Dimmer, Loader} from 'semantic-ui-react'
import {usersRequest} from '../../actions/users';
import ListPost from './module/ListPost';
import AddPost from './module/AddPost'

class PostsWrapper extends Component {
  render() {
    const {loading, posts, match} = this.props;
    return (
      <div>
        {
          loading &&
          <Segment style={{width: '70%', height: '50vh', marginRight: 50}}>
            <Dimmer active inverted>
              <Loader>Loading</Loader>
            </Dimmer>
          </Segment>
        }
        <AddPost userId={match.params.id}/>
        {
          loading === false && posts && <ListPost posts={posts}/>
        }
      </div>
    );
  }
}

const mapStateToProps = ({posts}) => ({
  loading: posts.fetching,
  error: posts.error,
  posts: posts.payload.list
});


const mapDispatchToProps = dispatch => (
  bindActionCreators({
    dispatchGetUser: () => usersRequest({method: 'GET'})
  }, dispatch)
);


export default connect(mapStateToProps, mapDispatchToProps)(PostsWrapper);
