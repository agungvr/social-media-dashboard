import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Button, Card, Image, Segment, Dimmer, Loader} from 'semantic-ui-react'
import {usersRequest} from '../../actions/users';
import ListPost from './module/ListPost';

class PostsWrapper extends Component {
  componentDidMount() {

  }

  render() {
    const {loading, posts} = this.props;
    console.log(posts)
    return (
      <div>
        {
          loading &&
          <Segment style={{height: '70vh', marginRight: 50}}>
            <Dimmer active inverted>
              <Loader>Loading</Loader>
            </Dimmer>
          </Segment>
        }
        {
          loading === false && posts && <ListPost posts={posts}/>
        }
      </div>
    );
  }
}

const mapStateToProps = ({posts}) => ({
  loading: posts.fetching,
  posts: posts.payload.list
});


const mapDispatchToProps = dispatch => (
  bindActionCreators({
    dispatchGetUser: () => usersRequest({method: 'GET'})
  }, dispatch)
);


export default connect(mapStateToProps, mapDispatchToProps)(PostsWrapper);
