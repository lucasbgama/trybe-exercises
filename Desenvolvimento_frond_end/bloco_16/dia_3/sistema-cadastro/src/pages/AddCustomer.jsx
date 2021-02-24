import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { addCustomerAction } from '../redux/actions/customers';

class AddCustomer extends React.Component {
  constructor() {
    super();
    this.state = {
      redirect: false,
    }

    this.submit = this.submit.bind(this);
  }

  submit(e) {
    e.preventDefault();
    const { addCustomer, user } = this.props;
    addCustomer(e.target[0].value, e.target[1].value, e.target[2].value, user);
    this.setState({ redirect: true });
  }

  render() {
    const { user } = this.props;
    const { redirect } = this.state;

    if(!user) return <p>Login não efetuado</p>;
    if(redirect) return <Redirect to="/customers" />;
    return(
      <form onSubmit={ this.submit }>
        <label>
          Nome
          <input type="text" />
        </label>
        <label>
          Email
          <input type="email" />
        </label>
        <label>
          Idade
          <input type="number" />
        </label>
        <button type="submit">Cadastrar</button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addCustomer: (name, email, age, user) => dispatch(addCustomerAction(name, email, age, user)),
});

export default connect(null, mapDispatchToProps)(AddCustomer);
