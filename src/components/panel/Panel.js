import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import {useImage} from 'react-image'
import './Panel.css';

import UnitDetail from '../unitDetail/UnitDetail';
import {SelectedContext} from '../context/SelectedContext';


class Panel extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }
  getUnitType(){
    //var unit = this.context.selectedUnit
    var unit = ""
    var As = /As-.*/
    if(Number.isInteger(unit)){
      return "block"
    }
    else{
      if(unit.match(As)){
        return "as"
      }
      else{
        return "region"
      }
    }
  }
  render(){
    var type = this.getUnitType()
    if(this.context.selectedUnit == null)
      return(null)
    else{
      return(
        <div className="sidepanel">
          <UnitDetail
          type={this.state.type}
          start={null}
          end={null}
          size={20}
          free={50}/>
        </div>
      );
    }
  }
}

Panel.contextType = SelectedContext;
export default Panel;
