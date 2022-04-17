import { combineReducers } from 'redux';

// Create reducers for name, email and password
const nameReducer = (state = '', action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return action.payload;
    default:
      return state;
  }
};

const emailReducer = (state = '', action) => {
  switch (action.type) {
    case 'CHANGE_EMAIL':
      return action.payload;
    default:
      return state;
  }
};

const passwordReducer = (state = '', action) => {
  switch (action.type) {
    case 'CHANGE_PASSWORD':
      return action.payload;
    default:
      return state;
  }
};

const login = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN':
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  name: nameReducer,
  email: emailReducer,
  password: passwordReducer,
  login: login,
});
