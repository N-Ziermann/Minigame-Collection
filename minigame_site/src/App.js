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
        <Header />
        <Carrousel items={["Dog","Cat","Bird"]}/>
        <Footer />
      </div>
    );
  }
}

export default App;
