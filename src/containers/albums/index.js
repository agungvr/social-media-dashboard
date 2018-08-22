import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Grid, Menu, Segment, Dimmer, Loader, Message, Icon} from 'semantic-ui-react'
import {photosRequest} from "../../actions/photos";
import Photos from '../photos';

class AlbumsWrapper extends Component {
  state = {
    activeItem: null
  };

  handleItemClick = (e, {name}) => {
    this.setState({activeItem: name});
    this.props.dispatchGetPhotos(name)
  };

  render() {
    const {loading, albums} = this.props;
    const {activeItem} = this.state;
    return (
      <Grid>
        {
          loading &&
          <Segment style={{height: '70vh', marginRight: 50}}>
            <Dimmer active inverted>
              <Loader>Loading</Loader>
            </Dimmer>
          </Segment>
        }
        <Grid.Column mobile={16} tablet={4} computer={4}>
          <Menu vertical>
            {
              loading === false && albums && albums.map((x, i) =>
                <div key={`index-${i}`}>
                  <Menu.Item
                    name={`${x.id}`}
                    active={activeItem === `${x.id}`}
                    onClick={this.handleItemClick}
                  >
                    <p>{x.title}</p>
                  </Menu.Item>
                </div>
              )
            }
          </Menu>
        </Grid.Column>
        <Grid.Column mobile={16} tablet={12} computer={12} style={{paddingRight: 20}}>
          {
            this.state.activeItem ? <Photos /> :
              <Message icon info>
                <Icon name='arrow left' />
                <Message.Content>
                  <Message.Header>
                    Please click on the album to see photos.
                  </Message.Header>
                </Message.Content>
              </Message>
          }
        </Grid.Column>
      </Grid>
    );
  }
}

const mapStateToProps = ({albums, photos}) => ({
  loading: albums.fetching,
  albums: albums.payload.list
});


const mapDispatchToProps = dispatch => (
  bindActionCreators({
    dispatchGetPhotos: (albumId) => photosRequest({method: 'GET_ID', albumId})
  }, dispatch)
);


export default connect(mapStateToProps, mapDispatchToProps)(AlbumsWrapper);
