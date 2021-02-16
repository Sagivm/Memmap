import React, { useImperativeHandle } from 'react';
import ReactDOM from 'react-dom';
import './MemoryMap.css';

import Search from '../search/Search';
import Board from '../board/Board';

//context

import {SelectedContext} from '../context/SelectedContext';

class MemoryMap extends React.Component {
  constructor(props){
    super(props);
    this.state={
      aircraft:"Raam",
      selectedIndex:null,
      selectedSegment: null
    }
    this.handleSelectedContext = this.handleSelectedContext.bind(this)
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
  handleSelectedContext(selectedIndex){
    this.setState({
      selectedIndex:selectedIndex
    })
  }
  createSelectedContext(){
    return({
      selectedIndex:this.state.selectedIndex,
      handleSelectedContext: this.handleSelectedContext
    });
  }
  render(){
    var items = this.preRender();
    var context = this.createSelectedContext();
    if (this.state.selectedSegment == null){
      return(
        <div>
          <ul class="nav nav-tabs segment-bar-classic">
            {items}
          </ul>
          <Search />
          <div class="tab-content d-flex align-items-stretch">
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
          <Search />
          <div class="tab-content d-flex flex-grow min-vh-100">
            <SelectedContext.Provider value={context}>
              <Board segment={this.state.selectedSegment}/>
            </SelectedContext.Provider>
          </div>
        </div>
      );
    }
    
  }
}

export default MemoryMap;