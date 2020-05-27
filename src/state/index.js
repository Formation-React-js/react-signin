import { createStore, combineReducers } from 'redux';
import currentUser from './current-user';

export default createStore(combineReducers({ currentUser }));















export { default as currentUserState } from './current-user';
