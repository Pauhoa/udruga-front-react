import { TOGGLE_LOADING } from '../actions/app';

const initialState = {
  loading: false,
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case TOGGLE_LOADING:
      return {
        ...state,
        loading: !state.loading,
      };
    default:
      return state;
  }
}

export default reducer;
