import { SIGNUP } from '../actions';

const INITIAL_STATE = [{
  email: "a@a.com",
  password: "123",
}];

const accountsReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case SIGNUP:
      return [...state, action.payload ];
    default:
      return state;
  }
}

export default accountsReducer;
