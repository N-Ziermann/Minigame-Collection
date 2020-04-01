import React from 'react';

class Footer extends React.Component{
  constructor(props){
    super (props);
  }
  render(){
    return(
      <p>
        Site made with React <br/>
        Game made in Godot
      </p>
    );
  }
}

export default Footer;
