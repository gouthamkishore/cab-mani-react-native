import { compose, createStore } from 'redux';
import reducers from './reducers';
import initialState from "./state";


const Store = function (state = initialState) {
  return createStore((state, action) =>{
    if(typeof action.type=="function") {
      return action.type(state,action);
    } else if(typeof action.name == "string") {
      return reducers[action.name]?reducers[action.name](state,action):state;
    } else {
      return state;
    }
  },state);
};
export default Store;