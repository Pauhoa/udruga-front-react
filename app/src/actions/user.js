// ACTION TYPE CHANGE_USER_FIELD
export const CHANGE_LOGIN_FIELD = 'CHANGE_LOGIN_FIELD';

// ACTION CREATOR CHANGE_USER_FIELD
export const changeLoginField = (value, name) => ({
  type: CHANGE_LOGIN_FIELD,
  value,
  name,
});

// ACTION TYPE CHANGE_USER_FIELD
export const CHANGE_SIGNIN_FIELD = 'CHANGE_SIGNIN_FIELD';

// ACTION CREATOR CHANGE_USER_FIELD
export const changeSigninField = (value, name) => ({
  type: CHANGE_SIGNIN_FIELD,
  value,
  name,
});
