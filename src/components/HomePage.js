import React from 'react';
import { Grid } from 'semantic-ui-react';
import MainHeader from './MainHeader';
import NavBar from './NavBar';
import Gallery from './Gallery';
import TextArticle from './TextArticle';

const HomePage = () => (
  <Grid>
    <MainHeader />
      <TextArticle content="
        Lorem sint laboris laborum adipisicing ullamco cillum eiusmod in irure quis proident est non. Incididunt ea labore qui eu consequat amet do magna tempor ullamco ea excepteur magna. Veniam laborum Lorem ad tempor duis aliqua excepteur cupidatat do nulla do nisi culpa pariatur.
      "/>
    <Gallery />
  </Grid>
);

export default HomePage;