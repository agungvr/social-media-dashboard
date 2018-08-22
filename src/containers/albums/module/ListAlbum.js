import React, {Component} from 'react'
import {Card} from 'semantic-ui-react'
import {Album} from "./Album";
import { withRouter } from "react-router-dom";

class ListAlbum extends Component {
  _userClick = (user) => () => {
    this.props.history.push({
      pathname: `/user/${user.id}/posts`
    })
  };

  render() {
    const {albums} = this.props;
    return (
      <Card.Group>
        {
          albums.map((item, i) =>
            <Album key={`index-${i}`} albums={item} onClick={this._userClick}/>
          )
        }
      </Card.Group>
    )
  };
}

export default withRouter(ListAlbum)
