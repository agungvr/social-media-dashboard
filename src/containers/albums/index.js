import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Button, Card, Image, Segment, Dimmer, Loader} from 'semantic-ui-react'
import {usersRequest} from '../../actions/users';
import ListAlbum from './module/ListAlbum';

class AlbumsWrapper extends Component {
  componentDidMount() {

  }

  render() {
    const {loading, albums} = this.props;
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
          loading === false && albums && <ListAlbum albums={albums}/>
        }
      </div>
    );
  }
}

const mapStateToProps = ({albums}) => ({
  loading: albums.fetching,
  albums: albums.payload.list
});


const mapDispatchToProps = dispatch => (
  bindActionCreators({
    dispatchGetUser: () => usersRequest({method: 'GET'})
  }, dispatch)
);


export default connect(mapStateToProps, mapDispatchToProps)(AlbumsWrapper);
