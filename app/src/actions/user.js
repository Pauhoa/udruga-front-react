// ACTION TYPE CHANGE_LOGIN_FIELD
export const CHANGE_LOGIN_FIELD = 'CHANGE_LOGIN_FIELD';

// ACTION CREATOR CHANGE_LOGIN_FIELD
export const changeLoginField = (value, name) => ({
  type: CHANGE_LOGIN_FIELD,
  value,
  name,
});

// ACTION TYPE CHANGE_SIGNIN_FIELD
export const CHANGE_SIGNIN_FIELD = 'CHANGE_SIGNIN_FIELD';

// ACTION CREATOR CHANGE_SIGNIN_FIELD
export const changeSigninField = (value, name) => ({
  type: CHANGE_SIGNIN_FIELD,
  value,
  name,
});

// ACTION TYPE LOGIN
export const LOGIN = 'LOGIN';

// ACTION CREATOR login
export const login = () => ({
  type: LOGIN,
});

// ACTION TYPE SAVE_USER
export const SAVE_USER = 'SAVE_USER';

// ACTION CREATOR saveUser
export const saveUser = (data) => ({
  type: SAVE_USER,
  data,
});
