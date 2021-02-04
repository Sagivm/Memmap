import React from 'react';
import ReactDOM from 'react-dom';
import './Segment.css';

import Block from '../block/Block'; 

const MEM_LENGTH = 20;

class BoardColumn extends React.Component{
    render(){
      const items = []
      for (var i=0; i<MEM_LENGTH; i++){
        items.push(
           <Block size={260}/>
        )
      }
      return(
        <div className="board-row">
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
        items.push(<BoardColumn />)
      }
      return (
        <div>
          {items}
        </div>
      );
    }
  }

export default Segment;