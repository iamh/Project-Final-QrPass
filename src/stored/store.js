import { createStore } from 'redux';

const reducer = (state, action) => {
  if (action.type === "SET_USER") {
    return {
      user: action.user
    };
  } 
  return state;
}

export default createStore(reducer, { user: [] });
