import React from 'react';
import './App.css';
import GameList from './Pages/GameList'
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
        <Switch>
          <Route exact path="/" component={Header}/>
          <Route exact path="/games" component={GameList}/>
          <Route component={Header}/>
        </Switch>
      </div>
    );
  }
}

export default App;
