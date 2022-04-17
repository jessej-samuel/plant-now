// Create and export actions for the reducers

const actions = {
  changeName: (name) => {
    return {
      type: "CHANGE_NAME",
      payload: name,
    };
  },
  changeEmail: (email) => {
    return {
      type: "CHANGE_EMAIL",
      payload: email,
    };
  },
  changePassword: (password) => {
    return {
      type: "CHANGE_PASSWORD",
      payload: password,
    };
  },
  login: (email, password) => {
    return {
      type: "LOGIN",
      payload: { email: email, password: password },
    };
  },
};

export default actions;
