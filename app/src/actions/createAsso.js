// ACTION TYPE CHANGE_CREATESASSO_FIELD
export const CHANGE_CREATEASSO_FIELD = 'CHANGE_CREATEASSO_FIELD';

// ACTION CREATOR CHANGE_CREATEASSO_FIELD
export const changeCreateAssoField = (value, name) => ({
  type: CHANGE_CREATEASSO_FIELD,
  value,
  name,
});

// ACTION TYPE CREATE_ASSO
export const CREATE_ASSO = 'CREATE_ASSO';

// ACTION CREATOR createAsso
export const createAsso = () => ({
  type: CREATE_ASSO,
});

// ACTION TYPE SAVE_ASSO
export const SAVE_ASSO = 'SAVE_ASSO';

// ACTION CREATOR saveAsso
export const saveAsso = (data) => ({
  type: SAVE_ASSO,
  data,
});
