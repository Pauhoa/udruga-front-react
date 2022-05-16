// ACTION TYPE CHANGE_JOINASSO_FIELD
export const CHANGE_JOINASSO_FIELD = 'CHANGE_JOINASSO_FIELD';

// ACTION CREATOR CHANGE_JOINASSO_FIELD
export const changeJoinAssoField = (value, name) => ({
  type: CHANGE_JOINASSO_FIELD,
  value,
  name,
});

// ACTION TYPE FETCH_ASSOCIATION
export const FETCH_ASSOS = 'FETCH_ASSOS';

// ACTION CREATOR fetchAssociation
export const fetchAssos = () => ({
  type: FETCH_ASSOS,
});

// ACTION TYPE SAVE_ASSOS
export const SAVE_ASSOS = 'SAVE_ASSOS';

// ACTION CREATOR saveAssos
export const saveAssos = (data) => ({
  type: SAVE_ASSOS,
  data,
});
