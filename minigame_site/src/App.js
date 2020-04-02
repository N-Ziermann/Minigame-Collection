import React from 'react';
import './App.css';
import GameList from './Pages/GameList'
import Header from "./Components/Header"

import {Route, Link} from "react-router-dom";

class App extends React.Component {
  constructor(props){
    super (props);
    document.body.style.backgroundColor = "grey";
  }
  render(){
    return (
      <div className="App">
        <Route exact path="#/" component={Header}/>
        <Route exact path="#/Minigame-Collection" component={Header}/>
        <Route exact path="#/Minigame-Collection/games" component={GameList}/>
        <Route exact path="#/games" component={GameList}/>
        <Route exact path="/" component={Header}/>
        <Route exact path="/Minigame-Collection" component={Header}/>
        <Route exact path="/Minigame-Collection/games" component={GameList}/>
        <Route exact path="/games" component={GameList}/>
      </div>
    );
  }
}

export default App;
