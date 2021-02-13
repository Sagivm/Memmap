import React from 'react';
import ReactDOM from 'react-dom';
import Select from 'react-select'
import './Search.css';
import {groupedOptions} from './Search-fetch';

class Search extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }
  render(){

      return(
        <Select
            isMulti
            name=""
            options={groupedOptions}
            className="basic-multi-select"
            classNamePrefix="Search unit"
        />
    );
  }
}

export default Search;
