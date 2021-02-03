import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './css/bootstrap-simplex.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const MEM_LENGTH = 20;
//const Classic_Theme = React.createContext(true);

class Block extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      type: null,
      filling_percent: this.props.size / 512 * 100
    }
  }
  get_color(){
    switch(Math.floor(this.state.filling_percent/25)*25){

      case(0):
        return "mem-block-0";
        break;
      case(25):
        return "mem-block-25"
        break;
      case(50):
        return "mem-block-50"
        break;
      case(75):
        return "mem-block-75"
        break;
      case(100):
        return "mem-block-100"
        break;
    }
  }
  render(){
    var color = this.get_color()
    return(
      <button className={'square ' + color}
        
              onClick={()=>alert("click")}>
        
      </button>
    );
  }
}

class BoardColumn extends React.Component{
  render(){
    const items = []
    for (var i=0; i<MEM_LENGTH; i++){
      items.push(<Block size={260} />)
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

function ThemeToggle(props) {
  var themeLabel
  if(props.dark_theme)
    themeLabel= "Dark";
  else
    themeLabel= "Classic";
  return (
    <div id="theme-toggle" class="custom-control custom-switch">
    
      <input type="checkbox" class="custom-control-input" id="ThemeToggle" 
             checked={props.dark_theme} 
             onClick={props.onClick}/>
      <label class="custom-control-label" for="ThemeToggle" >
        {themeLabel}
      </label>

    </div>
  );
}

class Window extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      dark_theme: false,
      stylePath: "../src/css/bootstrap-simplex.min.css"
    }
  }
  
  handleThemeToggleClick(dark){
    var new_theme = !this.state.dark_theme
    if(new_theme)
    {
      import("./css/bootstrap-darkly.min.css");
      this.setState({
        dark_theme: new_theme,
      });
    }
    else{
      import("./css/bootstrap-simplex.min.css");
      this.setState({
        dark_theme: new_theme,
      });
    } 
  }

  render() {
    return (
      <div>
        <MemmoryMap />
        <ThemeToggle dark_theme={this.state.dark_theme} onClick={() => this.handleThemeToggleClick(this.state.dark_theme)}  />
      </div>
    );
  }
}


// ========================================

ReactDOM.render(
  <Window />,
  document.getElementById('root')
);
