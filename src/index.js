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
import Board from './components/board/Board';

//context
import {SelectedContext} from './components/context/SelectedContext';

class Window extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      dark_theme: false,
      selectedIndex:null
    }
    this.handleSelectedContext = this.handleSelectedContext.bind(this)
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

  handleSelectedContext(selectedIndex){
    this.setState({
      selectedIndex:selectedIndex
    })


  }
  createSelectedContext(){
    return({
      selectedIndex:this.state.selectedIndex,
      handleSelectedContext: this.handleSelectedContext
    });
  }

  render() {
    alert(this.state.selectedIndex)
    var context = this.createSelectedContext()
    return (
      <div>
        <SelectedContext.Provider value={context}>
          <div className="sidenav">
            <Board />
          </div>
          <div className="main h-100">
            <MemoryMap/>
          </div>
        </SelectedContext.Provider>
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
