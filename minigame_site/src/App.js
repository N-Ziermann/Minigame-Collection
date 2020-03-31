import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props){
    super (props);
  }
  render(){
    return (
      <div className="App">
        <Header />
        <Carrousel />
        <Footer />
      </div>
    );
  }
}

class Carrousel extends React.Component{
  constructor(props){
    super (props);
    this.state = {
      position:3,
    }
  }
  render(){
    return (
      <div>
      {
        this.state.position == 1
        ? <div>First Element</div>
        : this.state.position == 2
        ? <div>Second Element</div>
        : <div>Third Element</div>
      }
      </div>
    )
  }
}

class Header extends React.Component{
  constructor(props){
    super (props);
  }
  render(){
    return(
      <h1>Minigame-Collection-App</h1>
    );
  }
}

class Footer extends React.Component{
  constructor(props){
    super (props);
  }
  render(){
    return(
      <p>Made in Godot</p>
    );
  }
}

export default App;
