import React from 'react'
import {Button, Card, Image, Segment, Dimmer, Loader} from 'semantic-ui-react'

const Posts = () => (
  <Card>
    <Card.Content>
      <Image floated='right' size='mini' src='https://i1.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1'/>
      <Card.Header>As</Card.Header>
      <Card.Meta style={{color: '#00b5ad'}}>@eee</Card.Meta>
      <Card.Meta style={{fontSize: 12}}>asdasd</Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <div className='ui three buttons'>
        <Button color="teal">
          Details
        </Button>
      </div>
    </Card.Content>
  </Card>
)

export const ListPosts = ({loading, posts}) => (
  <div>
    {
      loading &&
      <Segment style={{height: 276}}>
        <Dimmer active inverted>
          <Loader>Loading</Loader>
        </Dimmer>
      </Segment>
    }
    {
      loading === false && posts && posts.map((item, i) => Posts(item))
    }
  </div>
);
