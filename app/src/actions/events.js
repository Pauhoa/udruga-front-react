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

// ACTION TYPE JOIN_EVENT
export const JOIN_EVENT = 'JOIN_EVENT';

// ACTION CREATOR joinEvent
export const joinEvent = (eventId) => ({
  type: JOIN_EVENT,
  eventId,
});

// ACTION TYPE SAVE_PARTICIPATE
export const SAVE_PARTICIPATE = 'SAVE_PARTICIPATE';

// ACTION CREATOR saveParticipate
export const saveParticipate = (data) => ({
  type: SAVE_PARTICIPATE,
  data,
});
