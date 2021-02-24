import { ADD_CUSTOMER, RM_CUSTOMER } from '../actions';

const INITIAL_STATE = {};

const accountsReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case ADD_CUSTOMER:
      return {...state, [action.user]: [...(state[action.user] || []), action.payload] };
    case RM_CUSTOMER:
      return { ...state, [action.user]: state[action.user].filter((user) => user.email !== action.payload.email) }
    default:
      return state;
  }
}

export default accountsReducer;
