import React from 'react';

import Header from "../Components/Header"
import Footer from "../Components/Footer"
import "../Components/style/Play.css"

class Play extends React.Component {
  constructor(props){
    super (props);
    this.state={
      gameHeight:10
    }
    this.adjustGameHeight = this.adjustGameHeight.bind(this)
  }
  render(){
    return (
      <div className="App">
        <div className="container">
          <Header />
          <h3 style={{textDecoration:"underline"}}>Requires WebGL2! <br/> Doesn't support Safari and old Browsers!</h3>
          <div className="row">
            <div className="col-lg-4 col-md-2 col-sm-2 col-1" />
            <div className="col-lg-4 col-md-8 col-sm-8 col-10" id="GameContainer">
              <iframe frameBorder="0" src="https://itch.io/embed-upload/2087081?color=000000" allowFullScreen width="100%" height={this.state.gameHeight}><a href="https://salkiniklas.itch.io/minigame-collection">Play Minigame-Collection on itch.io</a></iframe>
            </div>
            <div className="col-lg-4 col-md-2 col-sm-2 col-1" />
          </div>
          <Footer />
        </div>
      </div>
    );
  }
  componentDidMount(){
    window.addEventListener('resize', this.adjustGameHeight);
    this.adjustGameHeight()
  }
  adjustGameHeight(){
    var width = document.getElementById("GameContainer").clientWidth
    this.setState({
      gameHeight:width/9*15
    })
  }
}

export default Play;
