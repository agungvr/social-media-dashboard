import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {photosRequest} from "../../actions/photos";
import ListPhoto from './module/ListPhoto';

class Photos extends Component {
  componentDidMount() {
    // const {dispatchGetPhotos, albumId} = this.props;
    // console.log('asd', albumId)
    // dispatchGetPhotos(albumId);
  }

  render() {
    const {loading, photos} = this.props;
    console.log(photos)
    return (
        <ListPhoto {...this.props} loading={loading} photos={photos}/>
    );
  }
}

const mapStateToProps = ({photos}) => ({
  loading: photos.fetching,
  photos: photos.payload.list
});


const mapDispatchToProps = dispatch => (
  bindActionCreators({
    dispatchGetPhotos: (albumId) => photosRequest({method: 'GET_ID', albumId})
  }, dispatch)
);


export default connect(mapStateToProps, mapDispatchToProps)(Photos);
