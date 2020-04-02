import React from 'react';

import Header from "../Components/Header"
import Footer from "../Components/Footer"
import Carrousel from "../Components/Carrousel"
// import images
import clean_screen from "../static/screenshots/clean_screen.png"
import find_cactus from "../static/screenshots/find_cactus.png"
import magnifying_glass from "../static/screenshots/magnifying_glass.png"
import mole_tab from "../static/screenshots/mole_tab.png"
import photo_ufo from "../static/screenshots/photo_ufo.png"

class GameList extends React.Component {
  constructor(props){
    super (props);
  }
  render(){
    return (
      <div className="App">
        <div className="container">
          <Header />
          <Carrousel items={[clean_screen, find_cactus, magnifying_glass, mole_tab, photo_ufo]}/>
          <br />
          <Footer />
        </div>
      </div>
    );
  }
}

export default GameList;
