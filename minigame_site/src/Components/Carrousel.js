import React from 'react';

class Carrousel extends React.Component{
  constructor(props){
    super (props);
    this.state = {
      position:0,
    }
    this.turn_carrousel = this.turn_carrousel.bind(this);
  }

  turn_carrousel(turn_by){
    // if conditions prevent over-/underflow
    if (turn_by > 0){
      if (this.state.position < this.props.items.length-1){
        this.setState(state=>({
          position : state.position + turn_by
        }));
      }
      else{
        this.setState({
          position:0
        });
      }
    }

    else if (turn_by < 0){
      if (this.state.position > 0){
        this.setState(state=>({
          position : state.position + turn_by
        }));
      }
      else{
        this.setState({
          position:this.props.items.length-1
        });
      }
    }
  }

  render(){
    return (
      <div>
        <h3>{this.props.items[this.state.position]}</h3>
        <button onClick={() => this.turn_carrousel(-1)}>{"<--"}</button>
        <button onClick={() => this.turn_carrousel(1)}>{"-->"}</button>
      </div>
    );
  }
}

export default Carrousel;
