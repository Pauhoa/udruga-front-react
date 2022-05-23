import { SAVE_ASSO } from '../actions/createAsso';

const initialState = {
  id: 1,
  name: 'Basket Club',
  siren: '',
  description: '',
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SAVE_ASSO:
      return {
        ...state,
        currentAsso: action.data,
      };
    default:
      return state;
  }
}

export default reducer;
