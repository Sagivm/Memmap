import React from 'react';
import ReactDOM from 'react-dom';
import './Segment.css';

import Block from '../block/Block'; 

const MEM_LENGTH = 20;
const MEM_BLOCK_SIZE=512;


const TEST_INDEX = 42;

class BoardColumn extends React.Component{
    render(){
      //TODO move to pre render function
      const items = []
      var selected = false;
      for (var i=0; i<MEM_LENGTH; i++){
        if (this.props.row*MEM_LENGTH +i == TEST_INDEX)
          selected = true;
        items.push(
           <Block 
              size={500}
              index={this.props.row*MEM_LENGTH + i}
              start={(this.props.row*MEM_LENGTH + i)*MEM_BLOCK_SIZE} 
              end={(this.props.row*MEM_LENGTH + i + 1)*MEM_BLOCK_SIZE - 1}
              selected = {selected}
              />
        )
        selected = false;
      }
      return(
        <div className="mem-row">
          {items}
        </div>
      );
    }
  }
  class Segment extends React.Component {
    constructor(props){
      super(props)
      this.state={
        segment: this.props.segment
      }
    }
    render() {
      const items = []
      for (var i=0; i<MEM_LENGTH; i++){
        items.push(<BoardColumn row={i} />)
      }
      return (
        <div class="segment">
          {items}
        </div>
      );
    }
  }

export default Segment;