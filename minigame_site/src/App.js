import React from 'react';
import './App.css';
import GameList from './Pages/GameList'
import Play from './Pages/Play'
import Header from "./Components/Header"

import {Route, Link, Switch} from "react-router-dom";

class App extends React.Component {
  constructor(props){
    super (props);
    document.body.style.backgroundColor = "grey";
  }
  render(){
    return (
      <div className="App">
        <Route exact path="/" component={Play} />
        <Route exact path="/games" component={GameList} />
      </div>
    );
  }
}


export default App;
