import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { rmCustomerAction } from '../redux/actions/customers';

class Customers extends React.Component {
  constructor() {
    super();
    this.state = {
      ordered: false,
    }
    this.changeOrder = this.changeOrder.bind(this);
  }

  changeOrder() {
    this.setState((prevState) => ({
      ordered: !prevState.ordered, 
    })
    );
  }

  customersList(customers, ordered) {
    const { user, rmCustomer } = this.props;
    return (
      <div>
        {customers.slice().sort((a,b) => {
          return (ordered ? a.name.localeCompare(b.name) : 0)
        }).map(({name, email, age}) => {
            return(
              <div key={ email }>
                <p>Nome: {name}</p>
                <p>Email: {email}</p>
                <p>Idade: {age}</p>
                <button onClick={ () => rmCustomer(email, user) }>&times;</button>
              </div>
            );
        })}
      </div>
    );
  }

  render() {
    const { user, customers } = this.props;
    const { ordered } = this.state;

    if (!user) {
      return(
        <section>
          <p>Login não efetuado!</p>
        </section>
      );
    }

    return(
      <section>
        {customers[user]?.length ?
        <div>
          <button type="button" onClick={ this.changeOrder }>Ordenar</button>
          {this.customersList(customers[user], ordered)}
        </div> : <p>Nenhum cliente cadastrado.</p>}
        <Link to="/add-customer">Cadastrar Cliente</Link>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  customers: state.customers,
});

const mapDispatchToProps = (dispatch) => ({
  rmCustomer: (email, user) => dispatch(rmCustomerAction(email, user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Customers);
