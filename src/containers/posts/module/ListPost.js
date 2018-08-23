import React, {Component} from 'react'
import {Card} from 'semantic-ui-react'
import Post from "./Post";
import { withRouter } from "react-router-dom";

class ListPost extends Component {
  render() {
    const {posts} = this.props;
    return (
      <Card.Group>
        {
          posts.map((item, i) =>
            <Post key={`index-${i}`} post={item} />
          )
        }
      </Card.Group>
    )
  };
}

export default withRouter(ListPost)
