import React, {lazy, Suspense} from 'react';
import ReactDOM from 'react-dom';
import './Bar.css';
import logo from '../../img/logo-stuck.png'

//import {useImage} from 'react-image'
import {Img} from 'react-image'
const myComponent = () => <Img src="https://www.example.com/foo.jpg" />


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
        </div>
    );
  }
}

export default Bar;
