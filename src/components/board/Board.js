import React from 'react';
import ReactDOM from 'react-dom';
import './Board.css';

class Board extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }
  render(){
      return(
        <div class="sidenav">
          <a href="../../img/logo-stuck.png"></a>
        </div>
    );
  }
}

export default Board;
