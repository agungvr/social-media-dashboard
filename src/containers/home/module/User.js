import React from 'react'
import {Button, Card, Image, Icon} from 'semantic-ui-react'

export const User = ({user, onClick}) => (
  <Card>
    <Card.Content>
      <Image floated='right' size='mini' src='https://i1.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1'/>
      <Card.Header>{user.name}</Card.Header>
      <Card.Meta style={{color: '#00b5ad'}}>@{user.username}</Card.Meta>
      <Card.Meta style={{fontSize: 12}}>{user.email}</Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <div className='ui three buttons'>
        <Button color="teal" onClick={onClick(user)}>
          Details
        </Button>
      </div>
    </Card.Content>
  </Card>
);
