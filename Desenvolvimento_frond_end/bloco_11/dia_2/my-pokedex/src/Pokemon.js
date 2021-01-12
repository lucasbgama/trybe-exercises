import { Component } from 'react';
import PropTypes from 'prop-types';

class Pokemon extends Component {
  render() {
    const { name, type, averageWeight, image } = this.props.pokemon;
    return (
      <div className="pokemon">
        <ul id="info" className="info">
          <li>{name}</li>
          <li>{type}</li>
          <li>Average Weight: {averageWeight.value} {averageWeight.measurementUnit}</li>
        </ul>
        <img src={image} alt={'Pokemon'} className="image"/>
      </div>
    )
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      value: PropTypes.number,
      measurementUnit: PropTypes.string,
    })
  })
}

export default Pokemon;
