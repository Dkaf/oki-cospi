import React from 'react';
import { Container } from 'semantic-ui-react';

const TextArticle = (props) => (
  <Container text>
    <p>{props.content}</p>
  </Container>
);

export default TextArticle;