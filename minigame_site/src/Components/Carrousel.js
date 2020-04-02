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
          <div className="col-xl-4 col-lg-4 col-md-2 col-sm-2 col-2" />
          <div className="col-lg-4 col-md-8 col-sm-8 col-8">
            <img className="carrousel-body" src={this.props.items[this.state.position]} />
          </div>
          <div className="col-lg-4 col-md-2 col-sm-2 col-2" />
        </div>

        <div className="row">
          <div className="col-md-4 col-sm-4 col-4" />
          <div className="col-md-2 col-sm-2 col-2">
            <div className="left" onClick={() => this.turn_carrousel(-1)}/>
          </div>
          <div className="col-md-2 col-sm-2 col-2">
            <div className="right" onClick={() => this.turn_carrousel(1)}/>
          </div>
          <div className="col-md-4 col-sm-4 col-4" />
        </div>

      </div>
    );
  }
}

export default Carrousel;
