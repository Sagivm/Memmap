import React from 'react';
import ReactDOM from 'react-dom';
import './UnitDetail.css';

class UnitDetail extends React.Component{
    
    constructor(props){
      super(props);
      this.state={
          format:"Hex",

      }
    }
    
    changeformat(){
        var currentFormat = this.state.format;
        if (currentFormat == "Hex")
            currentFormat = "Dec";
        else
            currentFormat = "Hex";
        this.setState({
            format: currentFormat
        })
    }

    render(){
        //TODO - on over show percentage
        return(
          <div>
            <div class="d-flex justify-content-center">
              <h1 className="boardTitle">Memory Block</h1>
            </div>
            <div>
                <div class="d-flex justify-content-center">
                    <div className="col-sm">
                        <h4>Start:{this.props.start}</h4>
                        <h4>Size:
                            {(this.state.format == "Hex") ? this.props.size.toString(16):this.props.size} 
                        </h4>
                    </div>
                    <div className="col-sm">
                        <h4>End:{this.props.end}</h4>
                        <h4>Free:
                            {(this.state.format == "Hex") ? this.props.free.toString(16):this.props.free}
                        </h4>
                    </div>
                </div>
                <div class="d-flex justify-content-center">
                    <button type="button" class="btn btn-primary" onClick={()=> this.changeformat()}>
                        {this.state.format}
                    </button>
                </div>
            </div>
            <div class="d-flex justify-content-center">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Unit</th>
                  <th scope="col">Start</th>
                  <th scope="col">End</th>
                  <th scope="col">Size</th>
                </tr>
              </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>d_uwi_support</td>
                    <td>20</td>
                    <td>39</td>
                    <td>20</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>d_barad_support</td>
                    <td>20</td>
                    <td>39</td>
                    <td>20</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>d_pacs_support</td>
                    <td>20</td>
                    <td>39</td>
                    <td>20</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        );
      }
}
export default UnitDetail;