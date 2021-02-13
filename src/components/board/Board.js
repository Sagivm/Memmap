import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import {useImage} from 'react-image'
import './Board.css';

import Segment from '../segment/Segment'
import Panel from '../panel/Panel'

class Board extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }
  renderMemBlockPanel(){
  }

  render(){
      return(
        <div className="container">
          <div className="row">
            <div className="col-sm-8">
              <Segment segment={this.props.segment}/>
            </div>
            <div className="col-sm panel" >
              <Panel/>
            </div>
          </div>
        </div>
    );
  }
}

export default Board;
