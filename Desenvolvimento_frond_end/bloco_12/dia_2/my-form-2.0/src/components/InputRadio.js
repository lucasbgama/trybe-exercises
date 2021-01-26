import { Component } from 'react';

class InputRadio extends Component {
  render() {
    const { options, label, onChange, name } = this.props;
    return (
      <label>
        {label}
        {options.map((option) => [
          <input
            type="radio"
            name={name}
            onChange={onChange}
            value={option.toLowerCase()}
            key={option}
          />,
           option ,
        ])}
      </label>
    );
  }
}

export default InputRadio;
