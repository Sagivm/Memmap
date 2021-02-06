import React from 'react';
import ReactDOM from 'react-dom';
import './BlockDetail.css';

class BlockDetail extends React.Component{
    
    constructor(props){
      super(props);
      this.state={
          format:"Hex"
      }
    }
    
    changeformat(){
        
    }
    render(){
        return(
            <div>
                <div class="d-flex justify-content-center">
                    <div className="col-sm">
                        <h4>Start:</h4>
                        <h4>Size: </h4>
                    </div>
                    <div className="col-sm">
                        <h4>End:</h4>
                        <h4>Free:</h4>
                    </div>
                </div>
                <div class="d-flex justify-content-center">
                    <button type="button" class="btn btn-primary" onClick={()=> this.changeformat()}>Hex</button>
                </div>
            </div>
        );
    }
}
export default BlockDetail;