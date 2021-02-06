import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import {useImage} from 'react-image'
import './Board.css';

import BoardDetail from '../blockDetail/BlockDetail';

function MyImageComponent() {
  const {src} = useImage({
    srcList:'https://www.example.com/foo.jpg'
    //srcList: '../../img/logo-stuck.png',
  })
 
  return <img src={src} />
}


class Board extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }
  renderMemBlockPanel(){
    //TODO - on over show percentage
    return(
      <div>
        <div class="d-flex justify-content-center">
          <h1 className="boardTitle">Memory Block</h1>
        </div>
        <BoardDetail />
        <div class="d-flex justify-content-center">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Unit</th>
              <th scope="col">Start</th>
              <th scope="col">End</th>
              <th scope="col">Size</th>
            </tr>
          </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>d_uwi_support</td>
                <td>20</td>
                <td>39</td>
                <td>20</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>d_barad_support</td>
                <td>20</td>
                <td>39</td>
                <td>20</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>d_pacs_support</td>
                <td>20</td>
                <td>39</td>
                <td>20</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  render(){
      return(
        <div>
          {this.renderMemBlockPanel()}
        </div>
    );
  }
}

export default Board;
