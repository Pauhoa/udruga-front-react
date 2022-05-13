// ACTION TYPE CHANGE_JOINASSO_FIELD
export const CHANGE_JOINASSO_FIELD = 'CHANGE_JOINASSO_FIELD';

// ACTION CREATOR CHANGE_JOINASSO_FIELD
export const changeJoinAssoField = (value, name) => ({
  type: CHANGE_JOINASSO_FIELD,
  value,
  name,
});
