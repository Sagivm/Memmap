import React from 'react';
import ReactDOM from 'react-dom';
import Select from 'react-select'
import './Search.css';

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
            name="colors"
            options={["sagiv","melamed"]}
            className="basic-multi-select"
            classNamePrefix="select"
        />
    );
  }
}

export default Search;
