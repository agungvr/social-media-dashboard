import React, {Component} from 'react';
import {Grid, Icon, Menu} from 'semantic-ui-react';
import {withRouter} from 'react-router-dom';

class MenuDetails extends Component {
  constructor(props){
    super(props);
    this.state = {
      activeItem: props.active
    };
  }

  handleItemClick = (e, {name}) => {
    this.setState({activeItem: name});
    const {userId} = this.props;
    this.props.history.push({
      pathname: `/user/${userId}/${name}`
    })
  };

  render() {
    const {activeItem} = this.state;
    return (
      <div className="menu-details">
        <Menu icon='labeled' vertical>

          <Menu.Item
            name='posts'
            active={activeItem === 'posts'}
            onClick={this.handleItemClick}
          >
            <Icon name='paper plane' color="teal"/>
            Posts
          </Menu.Item>

          <Menu.Item
            name='albums'
            active={activeItem === 'albums'}
            onClick={this.handleItemClick}
          >
            <Icon name='images' color="teal"/>
            Albums
          </Menu.Item>

        </Menu>
      </div>
    )
  }
}

export default withRouter(MenuDetails);
