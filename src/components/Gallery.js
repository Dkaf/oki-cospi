import React from 'react';
import { Grid, Header } from 'semantic-ui-react';
import GalleryImg from './GalleryImg';

import cindy1 from './../img/cindy-1.jpg';
import cindy2 from './../img/cindy-2.jpg';
import kirin1 from './../img/kirin-1.jpg';
import kirin2 from './../img/kirin-2.jpg';
import velvet from './../img/velvet.jpg';

const galleryImages = [
  cindy1,
  cindy2,
  kirin1,
  kirin2,
  velvet
];

const galleryItems = galleryImages.map(img => {
  return <GalleryImg src={img} />
});

const Gallery = () => (
  <Grid container columns="3">
    <Header size="huge" content="Gallery" />
    {galleryItems}
  </Grid>
);

export default Gallery;