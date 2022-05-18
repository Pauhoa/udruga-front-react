// ACTION TYPE FETCH_EVENTS
export const FETCH_EVENTS = 'FETCH_EVENTS';

// ACTION CREATOR FETCH_EVENTS
export const fetchEvents = () => ({
  type: FETCH_EVENTS,
});

// ACTION TYPE SAVE_EVENTS
export const SAVE_EVENTS = 'SAVE_EVENTS';

// ACTION CREATOR saveEvents
export const saveEvents = (data) => ({
  type: SAVE_EVENTS,
  data,
});
