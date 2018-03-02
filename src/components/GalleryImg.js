import React from 'react';
import { Container, Grid, Image } from 'semantic-ui-react';

const GalleryImg = (props) => (
  <Grid.Column>
    <Image src={props.src} />
  </Grid.Column>
);

export default GalleryImg;