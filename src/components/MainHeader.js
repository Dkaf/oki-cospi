import React, { Component } from 'react';
import { Transition, GridColumn, Sticky } from 'semantic-ui-react';
import sticker from './../img/Sticker.png';
import './../MainHeader.css';

const descriptions = [
  'Cosplays',
  'Sews',
  'Games'
]

class MainHeader extends Component {
  state = { logoVisible: true, logoAnimation: 'jiggle', descriptionVisible: true, description: 0 }

  toggleLogo = () => this.setState({ logoVisible: !this.state.logoVisible} ); 

  toggleDescription = () => this.setState({ descriptionVisible: !this.state.descriptionVisible })

  changeDescription = () => {
    this.setState({
      description: (this.state.description < descriptions.length) ? this.state.description++ : 0
    });
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
    return (
      <GridColumn className="header-container" width="16">
        <Transition onComplete={this.animateLogo} visible={this.state.logoVisible} animation={this.state.logoAnimation} duration={1000}>
          <img src={sticker} className="logo"/>
        </Transition>
        <div className="text-container">
          <h1 className="header-text">Oki Cospi</h1>
          <Transition onComplete={this.animateDescription} visible={this.state.descriptionVisible} animation="browse" duration={500}>
            <h2 className="header-text sub-header">{descriptions[this.state.description]}</h2>
          </Transition>
        </div>
      </GridColumn>
    )
  };
};

export default MainHeader;