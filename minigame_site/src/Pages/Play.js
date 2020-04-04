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
          <div className="row">
            <div className="col-lg-4 col-md-2 col-sm-2 col-1" />
            <div className="col-lg-4 col-md-8 col-sm-8 col-10" id="GameContainer">
              <iframe frameBorder="0" src="https://itch.io/embed-upload/2087081?color=000000" allowFullScreen width="100%" height={this.state.gameHeight}><a href="https://salkiniklas.itch.io/minigame-collection">Play Minigame-Collection on itch.io</a></iframe>
            </div>
            <div className="col-lg-4 col-md-2 col-sm-2 col-1" />
          </div>
          <h5 style={{textDecoration:"underline"}}>Incomplete WebGL1 Version! <br/> Due to browser compatibility issues</h5>
          <br />
          <DownloadButton/>
          <br />
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

const DownloadButton = () => {
  return (
    <div className="row">
      <div className="col-lg-4"/>
      <div className="col-lg-4 row">
        <div className="col-lg-3"/>
        <a href="https://github.com/N-Ziermann/Minigame-Collection/releases/download/v_1.0.0/Minigame-Collection.apk" className="row col-lg-8" style={{backgroundColor:"green", padding:"15px", borderRadius:10, textDecoration:"none", color:"black", border:"solid"}}>
          <img style={{width:"20%"}} src={"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fd%2Fdb%2FAndroid_robot_2014.svg%2F872px-Android_robot_2014.svg.png&f=1&nofb=1"}/>
          <h5 style={{marginLeft:20}}>Download for <br/>Android</h5>
        </a>
      </div>
    </div>
  );
}

export default Play;
