import { Component } from 'react';

import InputText from './InputText';
import InputSelect from './InputSelect';
import InputRadio from './InputRadio';
import InputTextArea from './InputTextArea';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = props.fields.reduce(
      (acc, curr) => Object.assign(acc, { [curr.name || curr.label.toLowerCase()]: '' }),
      {}
    );
    this.state.inputs = { InputText, InputRadio, InputSelect, InputTextArea };
  }

  handleChange = ({ target }) => {
    const { name, value, type, checked } = target;
    if (name === 'endereco' && !value.match(/^[A-Za-z0-9]*$/)) return;
    if (type !== 'radio' || checked) {
      this.setState({
        [name]: name === 'nome' ? value.toUpperCase() : value,
      });
    }
  };

  handleBlur = ({ target }) => {
    const { name, value } = target;
    if (name === 'cidade' && value.match(/^[0-9]/)) {
      this.setState({
        cidade: '',
      });
    }
  };

  onMouseEnter = ({ target }) => {
    const { name } = target;
    if(name === 'cargo') {
      alert('Preencha com cuidado esta informação.')
    }
  }

  render() {
    const fields = this.props.fields;
    return (
      <fieldset>
        {fields.map((field) => {
          const { label, maxLength, required, name, options, input = 'Text' } = field;
          const It = this.state.inputs['Input' + input];
          const nameState = (!name ? label.toLowerCase() : name);
          return (
            <It
              key={label}
              label={label}
              value={this.state[nameState]}
              onChange={this.handleChange}
              name={nameState}
              maxLength={maxLength}
              required={required}
              options={options}
              onBlur={this.handleBlur}
              onMouseEnter={this.onMouseEnter}
            />
          );
        })}
      </fieldset>
    );
  }
}

export default Form;
