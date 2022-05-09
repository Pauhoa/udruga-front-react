// ACTION TYPE CHANGE_USER_FIELD
export const CHANGE_USER_FIELD = 'CHANGE_USER_FIELD';

// ACTION CREATOR CHANGE_USER_FIELD
export const changeUserField = (value, name) => ({
  type: CHANGE_USER_FIELD,
  value,
  name,
});
