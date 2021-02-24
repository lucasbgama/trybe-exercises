import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      passwd: '',
      redirect: false,
    }
    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  submit(e) {
    e.preventDefault();
    const { email, passwd } = this.state;
    const { accounts, login } = this.props;
    const account = accounts.find((user) => user.email === email);
    console.log(account)
    if(account?.password === passwd) {
      this.setState(() => login(account.email), () => this.setState({ redirect: true }));
    }
  }

  render() {
    const { email, passwd, redirect } = this.state;
    if(redirect) return <Redirect to="/customers" />

    return(
      <section>
        <form onSubmit={ this.submit }>
          <label>
            Email
            <input type="email" name="email" value={ email } onChange={ this.handleChange }/>
          </label>
          <label>
            Senha
            <input type="password" name="passwd" value={ passwd } onChange={ this.handleChange }/>
          </label>
          <button type="submit">Login</button>
        </form>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  accounts: state.accounts,
});

export default connect(mapStateToProps, null)(Login);
