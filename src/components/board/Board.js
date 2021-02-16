import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import {useImage} from 'react-image'
import './Board.css';
import FadeIn from 'react-fade-in'
import {ProgressBar} from 'react-bootstrap'

import Segment from '../segment/Segment'
import Panel from '../panel/Panel'
import { SelectedContext } from '../context/SelectedContext';


class Board extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    }
    
  }
  renderMemBlockPanel(){
  }

  handleblankclick(){
    this.context.handleSelectedContext(null)
  }
  render(){
      return(
        <div className="container" onClick={()=>this.handleblankclick()}>
          <FadeIn>
          <div className="row">
            
              <div className="col-sm-8">
                <Segment segment={this.props.segment}/>
              </div>
            <div className="col-sm panel" >
              <FadeIn>
                <Panel/>
              </FadeIn>
            </div>
          </div>
          </FadeIn>
        </div>
    );
  }
  /*render(){
    return(
      <div class="d-flex justify-content-center w-100">
        <div className="w-75 align-center center">
            <ProgressBar animated label='80%' now={80}/>
        </div>
      </div>
    );
  }*/
}

Board.contextType =SelectedContext
export default Board;
