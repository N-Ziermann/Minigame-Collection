import React from 'react';
import './App.css';
import GameList from './Pages/GameList'
import Header from "./Components/Header"

import {Route, Link, Switch} from "react-router-dom";

class App extends React.Component {
  constructor(props){
    super (props);
    document.body.style.backgroundColor = "grey";
    // workaroud because normal routes don't work on github pages
    this.state = {
      "pathRequested": get_requested_path()
    }
  }
  render(){
    return (
      <div className="App">
        <script>console.log({this.state.pathRequested})</script>
        {
          this.state.pathRequested == "/"
          ? <Route component={Header} />
          : this.state.pathRequested == "/games"
            ? <Route component={GameList} />
            : <h1> Path Not Found </h1>
        }
      </div>
    );
  }
}

function get_requested_path(){
  var pathRequested = document.URL.replace(/^(?:\/\/|[^/]+)*\//, "")
  pathRequested = pathRequested.replace("Minigame-Collection", "")
  pathRequested = pathRequested.replace(/\/$/,"")
  if (pathRequested.length == 0)
    pathRequested = "/"

  return pathRequested
}

export default App;
