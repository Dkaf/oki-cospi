import React from 'react';
import { Container, GridColumn } from 'semantic-ui-react';
import './../TextArticle.css';

const TextArticle = (props) => (
  <GridColumn width="16" className="text-article-container">
    <Container text>
      <p className="text-article-content">{props.content}</p>
    </Container>
  </GridColumn>
);

export default TextArticle;