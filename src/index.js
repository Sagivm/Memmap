import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const MEM_LENGTH=20
class Block extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      type: null,
      filling_percent: this.props.size / 512 * 100
    }
  }
  render(){
    return(
      <button class="square mem-block-25" 
              onClick={()=>alert("click"
              )}>
        {this.props.value}
      </button>
    );
  }
}

class BoardColumn extends React.Component{
  render(){
    const items = []
    for (var i=0; i<MEM_LENGTH; i++){
      items.push(<Block value={i} />)
    }
    return(
      <div className="board-row">
        {items}
      </div>
    );
  }
}
class MemmoryMap extends React.Component {
  render() {
    const items = []
    for (var i=0; i<MEM_LENGTH; i++){
      items.push(<BoardColumn />)
    }
    return (
      <div>
        {items}
      </div>
    )
  }
}

// ========================================

ReactDOM.render(
  <MemmoryMap />,
  document.getElementById('root')
);
