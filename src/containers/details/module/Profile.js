import React from 'react'
import {Card, Image, Loader, Segment, Dimmer} from 'semantic-ui-react'

const ShowProfile = (user) => (
  <Card>
    <Card.Content>
      <div className="m-b-20 avatar-details">
        <Image size='small' src='https://i1.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png'/>
      </div>
      <Card.Header>
        {user.name}
      </Card.Header>
      <Card.Meta style={{color: '#00b5ad'}}>
        @{user.username}
      </Card.Meta>
      <Card.Meta style={{fontSize: 12}}>
        {user.email}
      </Card.Meta>
    </Card.Content>
    <Card.Content extra>

    </Card.Content>
  </Card>
);

export const Profile = ({loading, user, onClick}) => (
  <Card>
    {
      loading &&
      <Segment style={{height: 276}}>
        <Dimmer active inverted>
          <Loader>Loading</Loader>
        </Dimmer>
      </Segment>
    }
    {
      loading === false && user && ShowProfile(user)
    }
  </Card>
);
