import React, {lazy, Suspense} from 'react';
import ReactDOM from 'react-dom';
import Select from 'react-select'
import './Branch.css';


class Branch extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        branch:null
    }
  }
  renderBrnach(){
    return( [
        { value: '1', label: 'raam-223', color: '#00B8D9'},
        { value: '2', label: 'raam-172', color: '#00B8D9'},
        { value: '3', label: 'raam-231', color: '#00B8D9'},
        { value: '4', label: 'raam-80', color: '#00B8D9'},
      ]);
  }

  render(){
    var options = this.renderBrnach()
    return(
        <div>
            <Select
            className="basic-single"
            classNamePrefix="select"
            name="branch"
            options={options}
            placeholder="Select Branch..."
            />
            <div class="d-flex justify-content-center branch-button">
                <button type="button" class="btn btn-primary">
                    Import Map
                </button>
            </div>
        </div>
    );
  }
}

export default Branch;
