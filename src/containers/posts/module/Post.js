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
      <div className="d-flex j-c-e">
        <div className="m-r-20">
          <a>
            <Icon name='pencil'/>
            Edit
          </a>
        </div>
        <div>
          <a>
            <Icon name='trash'/>
            Delete
          </a>
        </div>
      </div>
    </Card.Content>
    <Card.Content extra>
      <Comments postsId={posts.id}/>
    </Card.Content>
  </Card>
);
