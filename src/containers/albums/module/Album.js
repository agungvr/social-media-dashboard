import React from 'react'
import {Button, Card, Image, Icon} from 'semantic-ui-react'

export const Album = ({albums, onClick}) => (
  <Card style={{width: '22%', height: 250, backgroundColor: '#535353'}} color="teal">
    <Card.Content style={{display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>
      <Card.Header style={{fontSize: 14, color: '#fff'}}>
        {albums.title}
      </Card.Header>
    </Card.Content>
  </Card>
);
