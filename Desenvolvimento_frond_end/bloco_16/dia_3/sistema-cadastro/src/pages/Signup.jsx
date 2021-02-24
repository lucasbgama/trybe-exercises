import React from 'react';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';
import signupAction from '../redux/actions/signup';

class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      redirect: false,
    }
    this.submit = this.submit.bind(this);
  }

  submit(e) {
    e.preventDefault();
    const { signup } = this.props;
    signup(e.target[0].value, e.target[1].value);
    console.log(e.target[1].value)
    this.setState({ redirect: true });
  }
  render() {
    const { redirect } = this.state;
    if(redirect) return <Redirect to="/" />;
    return(
      <form onSubmit={ this.submit }>
        <label>
          Email
          <input type="email" />
        </label>
        <label>
          Senha
          <input type="password" />
        </label>
        <button type="submit">Cadastrar</button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  signup: (email, passwd) => dispatch(signupAction(email, passwd)),
});

export default connect(null, mapDispatchToProps)(Signup);
