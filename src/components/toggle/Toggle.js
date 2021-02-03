import React from 'react';
import ReactDOM from 'react-dom';
import './Toggle.css';

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

  export default ThemeToggle;