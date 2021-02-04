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
    const colourOptions = [
      { value: '1', label: 'd_pro_1', color: '#00B8D9'},
      { value: '2', label: 'd_pro_2', color: '#00B8D9'},
      { value: '3', label: 'd_pro_3', color: '#00B8D9'},
      { value: '4', label: 'd_pro_4', color: '#00B8D9'},
    ];

      return(
        <Select
            isMulti
            name="colors"
            options={colourOptions}
            className="basic-multi-select"
            classNamePrefix="Search unit"
        />
    );
  }
}

export default Search;
