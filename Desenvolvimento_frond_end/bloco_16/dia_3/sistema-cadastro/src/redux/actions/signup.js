import { SIGNUP } from './index';

const signupAction = (email, password) => {
  return ({
    type: SIGNUP,
    payload: {
      email,
      password,
    },
  });
}

export default signupAction;
