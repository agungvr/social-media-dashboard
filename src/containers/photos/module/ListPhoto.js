import React, {Component} from 'react'
import {Loader, Segment, Dimmer, Card} from 'semantic-ui-react'
import {Photo} from "./Photo";
import {withRouter} from "react-router-dom";

class ListPhoto extends Component {
  _renderContent = (photos) => {
    return (
      <Card.Group itemsPerRow={3}>
        {
          photos.map((item, i) =>
            <Photo key={`index-${i}`} photo={item}/>
          )
        }
      </Card.Group>
    )
  };

  render() {
    const {loading, photos} = this.props;
    return (
      <div style={{paddingRight: 10}}>
        {
          loading &&
          <Segment style={{height: '80vh'}}>
            <Dimmer active inverted>
              <Loader>Loading</Loader>
            </Dimmer>
          </Segment>
        }
        {loading === false && photos && this._renderContent(photos)}
      </div>
    )
  }
};

export default withRouter(ListPhoto)
