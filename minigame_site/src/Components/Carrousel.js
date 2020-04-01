import React from 'react';

class Carrousel extends React.Component{
  constructor(props){
    super (props);
    this.state = {
      position:2,
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
      <br/>
      <button onClick={function(){console.log("a")}}>{"<--"}</button>
      <button onClick={function(){console.log("b")}}>{"-->"}</button>
      </div>
    )
  }
}

export default Carrousel;
