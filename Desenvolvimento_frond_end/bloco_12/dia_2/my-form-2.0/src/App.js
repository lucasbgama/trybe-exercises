import React from 'react';
import Form from './components/Form';
import DivData from './components/DivData';
import { fields, fields2 } from './data';

import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      showData: false,
      data: {},
      reset: 0,
    }
  }
  submit = (e) => {
    e.preventDefault();
    if(e.target.form.checkValidity()){
      this.setState({
        showData: true,
        data: e.target.form,
      });
    }
  }

  reset = () => {
    const { reset } = this.state || { reset: 0 };
    this.setState({
      showData: false,
      reset: reset+1,
    })
  }

  render() {
    const { showData, data, reset } = this.state; 
    return (
      <main>
        <form>
          <Form fields={fields} key={'f1' + reset}/>
          <Form fields={fields2} key={'f2' + reset}/>
          <button type="submit" onClick={this.submit}>Submit</button>
          <button type="button" onClick={this.reset}>Reset</button>
        </form>
        { showData && <DivData data={data} />}
      </main>
    );
  }
}
export default App;
