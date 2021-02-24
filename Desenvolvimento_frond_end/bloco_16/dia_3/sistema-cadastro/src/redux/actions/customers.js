import { ADD_CUSTOMER, RM_CUSTOMER } from './index';

const addCustomerAction = (name, email, age, user) => ({
  type: ADD_CUSTOMER,
  user,
  payload: {
    name,
    email,
    age,
  },
});

const rmCustomerAction = (email, user) => ({
  type: RM_CUSTOMER,
  user,
  payload: {
    email,
  }
});

export { addCustomerAction, 
  rmCustomerAction, 
};
