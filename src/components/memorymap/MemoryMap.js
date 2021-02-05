import React, { useImperativeHandle } from 'react';
import ReactDOM from 'react-dom';
import './MemoryMap.css';


import Segment from '../segment/Segment';
import Search from '../search/Search';

class MemoryMap extends React.Component {
  constructor(props){
    super(props);
    this.state={
      aircraft:"Raam",
      selectedSegment: null
    }
  }
  handleSegmentClick(segment){
    this.setState({
      selectedSegment: segment
    });
  }
  preRender(){
    const items=Array();
    var segments;
    var listItem;
    var i;

    if (this.state.aircraft=="Raam"){
      segments=["A1","A2","A","B"];
    }
    else{
      segments=["A1","A","B","H1","H2"]
    }
    for(const segment of segments){
      if(segment == this.state.selectedSegment){
        listItem =(
          <li class="nav-item selected" onClick={()=>this.handleSegmentClick(segment)}>
            <a class="nav-link selected" data-toggle="tab" href="#home">{segment}</a>
          </li>
        );
      }
      else{
        listItem =(
          <li class="nav-item" onClick={()=>this.handleSegmentClick(segment)}>
            <a class="nav-link" data-toggle="tab" href="#home">{segment}</a>
          </li>
        );
      }
      items.push(listItem);
    }
    return items;

  }
  render(){
    var items=this.preRender()
    if (this.state.selectedSegment == null){
      return(
        <div>
          <ul class="nav nav-tabs segment-bar-classic">
            {items}
          </ul>
          <div class="tab-content">
          </div>
        </div>
      );

    }
    else{
      return(
        <div>
          <ul class="nav nav-tabs segment-bar-classic">
            {items}
          </ul>
          <div class="tab-content">
            <Search />
            <Segment segment={this.state.selectedSegment}/>
          </div>
        </div>
      );
    }
    
  }
}

export default MemoryMap;