import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './css/bootstrap-simplex.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Suspense } from 'react';

// Components
import ThemeToggle from './components/toggle/Toggle';
import MemoryMap from './components/memorymap/MemoryMap'
import Segment from './components/segment/Segment'
import Board from './components/board/Board';

class Window extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      dark_theme: false,
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
        <div className="sidenav">
          <Board />
        </div>
        <div className="main h-100">
          <MemoryMap/>
        </div>
        <div>
          <ThemeToggle dark_theme={this.state.dark_theme} onClick={() => this.handleThemeToggleClick(this.state.dark_theme)}  />
        </div>
      </div>
    );
  }
}


// ========================================

ReactDOM.render(
  <Window />,
  document.getElementById('root')
);
