import { Component } from 'react';

class InputSelect extends Component {
  render() {
    const { options, value, label, onChange, name } = this.props;
    return (
      <label>
        {label}
        <select value={value} onChange={onChange} name={name}>
          {options.map((option) => (
            <option value={option.substring(0, 2)} key={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
    );
  }
}

export default InputSelect;
