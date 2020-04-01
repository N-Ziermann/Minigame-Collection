import React from 'react';
import './style/Carrousel.css';
import 'bootstrap/dist/css/bootstrap.min.css';

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
        <div className="row">
          <div class="col-md-4">
            <div className={"left"} onClick={() => this.turn_carrousel(-1)}/>
          </div>
          <div class="col-md-4">
            <div className="carrousel-body" style={{backgroundColor:this.props.items[this.state.position]}}></div>
          </div>
          <div class="col-md-4">
            <div className={"right"} onClick={() => this.turn_carrousel(1)}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Carrousel;
