import React, {lazy, Suspense} from 'react';
import ReactDOM from 'react-dom';
import Select from 'react-select'
import './Quick.css';


class Quick extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }
  renderQuick(){
    return(null);
  }

  render(){
    return(
        <div>
            <div class="d-flex justify-content-center branch-button">
                <button type="button" class="btn btn-primary">
                    Unit's Connection
                </button>
            </div>
            <div class="d-flex justify-content-center branch-button">
                <button type="button" class="btn btn-primary">
                    Can i move this unit?
                </button>
            </div>
        </div>
    );
  }
}

export default Quick;
