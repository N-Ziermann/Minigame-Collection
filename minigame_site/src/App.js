import React from 'react';
import './App.css';
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Carrousel from "./Components/Carrousel"

class App extends React.Component {
  constructor(props){
    super (props);
  }
  render(){
    return (
      <div className="App">
        <div className="container">
          <Header />
          <Carrousel items={["blue","red","green"]}/>
          <br />
          <br />
          <br />
          <br />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
