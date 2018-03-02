import React from 'react';
import { Container, Header, Grid } from 'semantic-ui-react';
import './../SectionImage.css';


const SectionImage = (props) => (
  <Grid.Row verticalAlign="middle" className="section-image">
    <Grid.Column centered>
      <h1 className="section-title">{props.sectionTitle}</h1>
    </Grid.Column>
  </Grid.Row>
);

export default SectionImage;