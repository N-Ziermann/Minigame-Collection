import React from 'react';

import Header from "../Components/Header"
import Footer from "../Components/Footer"
import "../Components/style/Play.css"
import '../Components/style/PhoneBody.css';

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
            <div className="col-lg-4 col-md-8 col-sm-8 col-10" id="PhoneBody">
              <div id="Speaker">
                <div id="innerSpeaker"/>
              </div>
              <iframe frameBorder="0" src="https://itch.io/embed-upload/2107129?color=000000" allowFullScreen width="100%" height={this.state.gameHeight}>
                <a href="https://salkiniklas.itch.io/minigame-collection">Play Minigame-Collection on itch.io</a>
              </iframe>
            </div>
            <div className="col-lg-4 col-md-2 col-sm-2 col-1" />
          </div>
          <br />
          <h5 className="important">Incomplete WebGL1 Version! <br/> Due to browser compatibility issues</h5>
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
    var width = document.getElementById("PhoneBody").clientWidth
    this.setState({
      gameHeight:width/9*15
    })
  }
}

const DownloadButton = () => {
  return (
    <div className="row">
      <div className="col-lg-4 col-md-1 col-2"/>
      <div className="col-lg-4 col-md-10 col-10 row">
        <div className="col-lg-2 col-md-3 col-0"/>
        <a id="ButtonBody" className="col-lg-10 col-md-7 col-12 row" href="https://github.com/N-Ziermann/Minigame-Collection/releases/download/v_1.0.0/Minigame-Collection.apk">
          <div className="col-lg-4 col-md-4 col-5">
            <img id="AndroidLogo" src={"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fd%2Fdb%2FAndroid_robot_2014.svg%2F872px-Android_robot_2014.svg.png&f=1&nofb=1"}/>
          </div>
          <div className="col-lg-8 col-md-8 col-7" id="DownloadTextBody">
            <h5 id="DownloadText">Download<br/>for<br/>Android</h5>
          </div>
        </a>
      </div>
      <div className="col-lg-4 col-1"/>
    </div>
  );
}

export default Play;
