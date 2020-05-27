import { atom } from "recoil";
import { connect } from "react-redux";

const initialState = null;

export const withCurrentUser = (Component) => connect(
  (state) => ({ currentUser: state.currentUser })
)(Component);

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CURRENTUSER':
      const keys = Object.keys(action.data);
      if (!keys.includes('username') ||
        !keys.includes('name') ||
        !keys.includes('password') ||
        !keys.includes('email')
      ) {
        throw new Error('Keys missing in new currentUser object.');
      }
      return action.data;

    case 'RESET_CURRENTUSER':
      return null;

    default:
      return state;
  }
};


















export const currentUserState = atom({
  key: 'currentUser',
  default: null,
});
