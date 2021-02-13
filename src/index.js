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
import Bar from './components/bar/Bar';

class Window extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      dark_theme: false,
      selectedIndex:null
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
            <Bar/>
          </div>
          <div className="main h-100">
            <MemoryMap/>
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
