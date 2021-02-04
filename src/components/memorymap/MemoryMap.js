import React from 'react';
import ReactDOM from 'react-dom';
import './MemoryMap.css';


import Segment from '../segment/Segment'

class MemoryMap extends React.Component {
  constructor(props){
    super(props);
    this.state={
      aircraft:"Raam"
    }
  }
  render(){
    var items=Array()
    var segments;
    var i;
    if (this.state.aircraft=="Raam"){
      segments=["A1","A2","A","B"];
    }
    else{
      segments=["A1","A","B","H1","H2"]
    }
    for(i=0;i<segments.length;i++){
      items.push(
        <li class="nav-item">
          <a class="nav-link" data-toggle="tab" href="#home">{segments[i]}</a>
        </li>
      );
    }
    return(
      <div>
        <ul class="nav nav-tabs">
          {items}
        </ul>
        <div class="tab-content h-100">
          <Segment/>
        </div>
      </div>
    );
  }
}

export default MemoryMap;