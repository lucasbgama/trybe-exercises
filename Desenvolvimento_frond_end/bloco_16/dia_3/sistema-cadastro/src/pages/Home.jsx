import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return(
      <section>
        <Link to="/login">Login</Link>
        <Link to="/signup">Cadastrar</Link>
      </section>
    );
  }
}

export default Home;
