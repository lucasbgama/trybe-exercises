import { Component } from 'react';

class InputText extends Component {
  constructor() {
    super();
    this.state = {
      onMouseEnterTimes: 0,
    };
  }

  onMouseEnter = (event) => {
    this.setState({
      onMouseEnterTimes: 1
    })
    if(!this.state.onMouseEnterTimes) {
      this.props.onMouseEnter(event);
    }
  }

  render() {
    const { label, name, maxLength, required, value, onChange, onBlur } = this.props;
    return (
      <label>
        {label}
        <textarea
          name={name}
          maxLength={maxLength}
          required={required}
          onChange={onChange}
          value={value}
          onBlur={onBlur}
          onMouseEnter={this.onMouseEnter}
        />
      </label>
    );
  }
}

export default InputText;
