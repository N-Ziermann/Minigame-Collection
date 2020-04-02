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
          <Link to="/" className="Header-UI">Home </Link>
          <Link to="/games" className="Header-UI">Games</Link>
        </h5>
      </div>
    );
  }
}

export default Header;
