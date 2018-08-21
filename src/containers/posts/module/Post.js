import React from 'react'
import {Button, Card, Image, Icon} from 'semantic-ui-react'

export const Post = ({posts, onClick}) => (
  <Card style={{width: '30%'}}>
    <Card.Content>
      <Image floated='right' size='mini'
             src='https://i1.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1'/>
      <Card.Header style={{fontSize: 14}}>
        {posts.title}
      </Card.Header>
      <Card.Meta style={{fontSize: 12, marginTop: 10}}>
        {posts.body}
      </Card.Meta>
    </Card.Content>
    <Card.Content extra>

    </Card.Content>
  </Card>
);
