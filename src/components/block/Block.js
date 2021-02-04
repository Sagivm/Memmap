import React from 'react';
import ReactDOM from 'react-dom';
import ReactTooltip from 'react-tooltip';
import { format } from 'react-string-format';
import './Block.css';

const MEM_BLOCK_SIZE=512



class Block extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      index:this.props.index,
      type: null,
      start:this.props.start,
      end:this.props.end,
      free:MEM_BLOCK_SIZE - this.props.size,
      //TODO Maybe change
      filling_percent: this.props.size / MEM_BLOCK_SIZE * 100
    }
  }
  get_filling_class(){
    //TODO: maybe make this more elegent and add more divition  
    switch(Math.floor(this.state.filling_percent/25)*25){

      case(0):
        return "mem-block-0";
        break;
      case(25):
        return "mem-block-25"
        break;
      case(50):
        return "mem-block-50"
        break;
      case(75):
        return "mem-block-75"
        break;
      case(100):
        return "mem-block-100"
        break;
    }
  }
  
  render(){
    var filling_class = this.get_filling_class()
    var size =30
    var content = format('<h6>start: {0}</h6><h6>end: {1}</h6><h6>free: {2}</h6></div>',
      this.state.start.toString(16),
      this.state.end.toString(16),
      (MEM_BLOCK_SIZE - this.props.size).toString(16));
    if (this.props.selected)
    {
      return(
        <div>
          <button type="button"
                  className={'square ' + filling_class + ' ' + (this.props.selected ? "selected": null) }
                  onClick={()=>alert("click")}
                  data-tip={content}/>
          <ReactTooltip 
              place="bottom"
              type="light" 
              effect="solid"
              multiline
              html={true}
              />    
        </div>
      );

    }
    else{
      return(
        <div>
          <button type="button"
                  className={'square ' + filling_class + ' ' + (this.props.selected ? "selected": null) }
                  onClick={()=>alert("click")}
                  onMouseOver={()=>this.props.handleSelectedOver(this.state.index)}
                  />    
        </div>
      );
    }
  }
}

export default Block;
