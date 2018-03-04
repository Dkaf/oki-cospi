import React, { Component } from 'react';
import { Transition, Grid, Sticky, Image } from 'semantic-ui-react';
import sticker from './../img/Sticker.png';
import Gallery from './Gallery';
import './../MainHeader.css';

const descriptions = [
  'Cosplays',
  'Sews',
  'Games'
]

class MainHeader extends Component {
  state = { logoVisible: true, logoAnimation: 'jiggle', descriptionVisible: true, description: 0 }

  handleContextRef = contextRef => this.setState({ contextRef });

  toggleLogo = () => this.setState({ logoVisible: !this.state.logoVisible} ); 

  toggleDescription = () => this.setState({ descriptionVisible: !this.state.descriptionVisible })

  changeDescription = () => {
    if (this.state.description < descriptions.length) {
      this.setState({ description: this.state.description + 1 })
    } else {
      this.setState({ description: 0 })
    }
  }

  animateLogo = () => {
    setTimeout(() => {
      this.toggleLogo();
    },5000)
  }

  animateDescription = () => {
    setTimeout(() => {
      this.toggleDescription();
      this.changeDescription();
    },2000)
  }
  
  componentDidMount() {
    this.animateLogo();
  }
  render() {
    const { contextRef } = this.state;

    return (
      <Grid.Column className="header-container" width="16">
          <Sticky offset={20}>
            <Transition onComplete={this.animateLogo} visible={this.state.logoVisible} animation={this.state.logoAnimation} duration={1000}>
              <Image src={sticker} size="small" id="logo" alt="Oki Cospi logo" />
            </Transition>
          </Sticky>
            <h1 className="header-text">Oki Cospi</h1>
      </Grid.Column>
    )
  };
};

export default MainHeader;