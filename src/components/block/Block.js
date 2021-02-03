import React from 'react';
import ReactDOM from 'react-dom';
import './Block.css';

class Block extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      type: null,
      filling_percent: this.props.size / 512 * 100
    }
  }
  get_color(){
    switch(Math.floor(this.state.filling_percent/25)*25){

      case(0):
        return "mem-block-0";
        break;
      case(25):
        return "mem-block-25"
        break;
      case(50):
        return "mem-block-50"
        break;
      case(75):
        return "mem-block-75"
        break;
      case(100):
        return "mem-block-100"
        break;
    }
  }
  render(){
    var color = this.get_color()
    return(
      <button className={'square ' + color}
        
              onClick={()=>alert("click")}>
        
      </button>
    );
  }
}

export default Block;
