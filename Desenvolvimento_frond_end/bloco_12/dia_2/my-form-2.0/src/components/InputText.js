import { Component } from 'react';

class InputText extends Component {
  render() {
    const { label, name, maxLength, required, value, onChange, onBlur } = this.props;
    return (
      <label>
        {label}
        <input
          type="text"
          name={name}
          maxLength={maxLength}
          required={required}
          onChange={onChange}
          value={value}
          onBlur={onBlur}
        />
      </label>
    );
  }
}

export default InputText;
