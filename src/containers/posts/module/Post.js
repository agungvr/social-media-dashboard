import React from 'react'
import {Button, Card, Image, Icon, Comment, Form, Header} from 'semantic-ui-react'
import Comments from './Comments';

export const Post = ({posts, onClick}) => (
  <Card style={{width: '70%'}}>
    <Card.Content>
      <Card.Header style={{color: '#00b5ad'}}>
        {posts.title.toUpperCase()}
      </Card.Header>
      <Card.Description style={{marginTop: 10}}>
        {posts.body}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='comments'/>
        Comment
      </a>
    </Card.Content>
    <Card.Content extra>
      <Comments postsId={posts.id}/>
    </Card.Content>
  </Card>
);
