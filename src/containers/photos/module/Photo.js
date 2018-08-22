import React from 'react'
import {Button, Card, Image, Icon, Modal} from 'semantic-ui-react'
import { LazyImage } from "react-lazy-images";

export const Photo = ({photo, onClick}) => (
  <Card>
    <Modal trigger={
      <a href="#" onClick={onClick(photo)} style={{paddingTop: 5, paddingRight: 5, paddingLeft: 5}}>
        <LazyImage
          style={{width: '100%', height: '100%'}}
          src={photo.thumbnailUrl}
          alt="Agung Ganteng"
          placeholder={({ imageProps, ref }) => (
            <img ref={ref} src="http://arrowvalleyhealthclub.co.uk/wp-content/themes/arrowvalleyhealthclub/assets/images/staff-loading-placeholder.png" alt={imageProps.alt} style={{width: '100%', height: '100%'}} />
          )}
          actual={({ imageProps }) => <img {...imageProps} />}
        />
      </a>
    }>
      <Modal.Content image>
        <Image wrapped size='medium' src={photo.url} />
        <Modal.Description>
          <p>{photo.title}</p>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  </Card>
);
