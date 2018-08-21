import React, {Component} from 'react'
import {Loader, Card} from 'semantic-ui-react'
import {User} from "./User";
import { withRouter } from "react-router-dom";

class ListUser extends Component {
  _userClick = (user) => () => {
    this.props.history.push({
      pathname: `/user/${user.id}`
    })
  };

  _renderContent = (users) => {
    return(
      <Card.Group>
        {
          users.map((item, i) =>
            <User key={`index-${i}`} user={item} onClick={this._userClick}/>
          )
        }
      </Card.Group>
    )
  };

  render() {
    const {loading, users} = this.props;
    return (
      <div>
        {loading && <Loader>Loading...</Loader>}
        {users && this._renderContent(users)}
      </div>
    )
  }
};

export default withRouter(ListUser)
