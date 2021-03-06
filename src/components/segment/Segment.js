import React from 'react';
import ReactDOM from 'react-dom';
import './Segment.css';

import Block from '../block/Block'; 

const MEM_LENGTH = 32;
const MEM_BLOCK_SIZE=512;

//TODO: limit rendering not to entire page
class BoardColumn extends React.Component{
    
  constructor(props){
    super(props);
    this.state={
    }
  }
  
  render(){
    //TODO move to pre render function
    const items = []
    var selected = false;
    for (var i=0; i<MEM_LENGTH; i++){
      items.push(
           <Block 
              size={450}
              index={this.props.row*MEM_LENGTH + i}
              start={(this.props.row*MEM_LENGTH + i)*MEM_BLOCK_SIZE} 
              end={(this.props.row*MEM_LENGTH + i + 1)*MEM_BLOCK_SIZE - 1}
              hovered = {(this.props.row*MEM_LENGTH +i == this.props.hoveredIndex) ? true:false}
              handleHover={this.props.handleHover}
              />
      )
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
        hoveredIndex: null
      }
      this.handleHover=this.handleHover.bind(this);
    }
    //TODO: make hover a context as well
    handleHover(index){
      this.setState({
        hoveredIndex: index
      });
    }
    render() {
      const items = []
      if (this.props.segment == null)
        return(null);
      for (var i=0; i<MEM_LENGTH; i++){
        items.push(<BoardColumn 
          hoveredIndex={this.state.hoveredIndex}
          handleHover={this.handleHover} 
          row={i} />)
      }
      return (
        <div class="segment">
          {items}
        </div>
        
      );
      
    }
  }

export default Segment;