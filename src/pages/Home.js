import React, { Component } from 'react';


import Header from '../components/home/header/Header';
import Container from '../components/home/page/image-container/Container';
import TextContainer from '../components/home/page/explication-container/TextContainer';

class Home extends Component {
  
    constructor(props) {
        super(props)

        this.state = {
         
        }
    }

  render() {
    const {title} = this.props
    return (

      <div className="AppOrange">
            <Header></Header>
            <TextContainer></TextContainer>
            <Container></Container>
      </div>

    )
  }
}

export default Home;