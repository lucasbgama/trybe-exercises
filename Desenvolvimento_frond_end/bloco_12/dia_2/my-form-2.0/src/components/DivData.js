import { Component } from 'react';

class DivData extends Component {
  
  showData(obj) {
    const arr = [...Array(obj.length - 1).keys()]
    return(
      <div>
        {arr.map(i => (
          <span key={i}>
          { (obj[i].type !== 'fieldset' && obj[i].type !== 'button' && obj[i].type !== 'submit') 
            && (obj[i].type !== 'radio' || obj[i].checked === true)
              && <p>{obj[i].name}: {obj[i].value}</p> } 
          </span>
        ))}
      </div>
    )
  }

  render(){
    const { data } = this.props;
    return(
      <div>
        {this.showData(data)}
      </div>
    )
  }
}


export default DivData;
