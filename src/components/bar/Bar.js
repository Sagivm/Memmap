import React, {lazy, Suspense} from 'react';
import ReactDOM from 'react-dom';
import './Bar.css';
import logo from '../../img/logo-stuck.png'
import {Img} from 'react-image'

//
import Branch from '../branch/Branch';
import Quick from '../quick/Quick';


class Bar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }
  renderBar(){
  }

  render(){
      return(
        <div>
           <img class="img-fluid" src={logo}/>
           <Branch/>
        </div>
    );
  }
}

export default Bar;
