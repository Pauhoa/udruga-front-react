// ACTION TYPE CHANGE_CREATEEVENT_FIELD
export const CHANGE_CREATEEVENT_FIELD = 'CHANGE_CREATEEVENT_FIELD';

// ACTION CREATOR CHANGE_CREATEEVENT_FIELD
export const changeCreateEventField = (value, name) => ({
  type: CHANGE_CREATEEVENT_FIELD,
  value,
  name,
});

// ACTION TYPE CREATE_EVENT
export const CREATE_EVENT = 'CREATE_EVENT';

// ACTION CREATOR createEvent
export const createEvent = () => ({
  type: CREATE_EVENT,
});

// ACTION TYPE SAVE_EVENT
export const SAVE_EVENT = 'SAVE_EVENT';

// ACTION CREATOR saveEvent
export const saveEvent = (data) => ({
  type: SAVE_EVENT,
  data,
});
