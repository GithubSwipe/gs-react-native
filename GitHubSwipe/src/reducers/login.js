import Immutable from 'immutable';
import { GITHUB_LOGIN_STARTED, GITHUB_LOGIN_FAILED, GITHUB_LOGIN_SUCCEEDED } from '../constants/login';

const defaultState = new Immutable.List();

export default function loginReducer(state = defaultState, action) {
  switch(action.type) {
    case GITHUB_LOGIN_STARTED:
      return state;
    case GITHUB_LOGIN_FAILED:
      return state;
    case GITHUB_LOGIN_SUCCEEDED:
      return state;
    default:
      return state;
  }
}
