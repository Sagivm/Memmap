import React from 'react';
import ReactDOM from 'react-dom';
import './BlockDetail.css';

class BlockDetail extends React.Component{
    
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
        return(
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
        );
    }
}
export default BlockDetail;