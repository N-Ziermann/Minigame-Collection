import React from 'react';
import {Link} from 'react-router-dom';
import '../App.css';

class Header extends React.Component{
  constructor(props){
    super (props);
  }
  render(){
    return(
      <div>
        <h1>Minigame-Collection-App</h1>
        <h5>
          <a href="/Minigame-Collection" className="Header-UI">Home </a>
          <a href="/Minigame-Collection/games" className="Header-UI">Games</a>
        </h5>
      </div>
    );
  }
}

export default Header;
