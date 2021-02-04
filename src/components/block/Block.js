import React from 'react';
import ReactDOM from 'react-dom';
import ReactTooltip from 'react-tooltip';
import './Block.css';

const MEM_BLOCK_SIZE=512

class Block extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      index:this.props.index,
      type: null,
      start:this.props.start,
      end:this.props.end,
      filling_percent: this.props.size / MEM_BLOCK_SIZE * 100
    }
  }
  get_color(){
    //TODO: maybe make this more elegent
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
      <div>
        <button type="button"
                className={'square ' + color}
                onClick={()=>alert("click")}/>    
      </div>
    );
  }
}

export default Block;
