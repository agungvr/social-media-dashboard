import React, {Component} from 'react'
import {Card} from 'semantic-ui-react'
import {Post} from "./Post";
import { withRouter } from "react-router-dom";

class ListPost extends Component {
  _userClick = (user) => () => {
    this.props.history.push({
      pathname: `/user/${user.id}/posts`
    })
  };

  render() {
    const {posts} = this.props;
    return (
      <Card.Group>
        {
          posts.map((item, i) =>
            <Post key={`index-${i}`} posts={item} onClick={this._userClick}/>
          )
        }
      </Card.Group>
    )
  };
}

export default withRouter(ListPost)
