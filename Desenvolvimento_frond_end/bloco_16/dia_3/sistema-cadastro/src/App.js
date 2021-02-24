import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';
import store from './redux/store'

import { Provider } from 'react-redux';

import Home from './pages/Home';
import Login from './pages/Login';
import Customers from './pages/Customers';
import AddCustomer from './pages/AddCustomer';
import Signup from './pages/Signup';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: undefined,
    }
    this.login = this.login.bind(this);
  }

  login(user) {
    this.setState({ user });
  }

  render() {
    const { user } = this.state;
    return(
      <Provider store={ store }>
        <BrowserRouter>
          <Switch>
            <Route path="/login" render={ () => <Login login={ this.login } />} />
            <Route path="/customers" render={ () => <Customers user={ user } /> } />
            <Route path="/add-customer" render={ () => <AddCustomer user={ user } /> } />
            <Route path="/signup" component={ Signup } />
            <Route path="/" component={ Home } />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}
export default App;
