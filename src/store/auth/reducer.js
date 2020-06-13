const initialState = {
  me: 'Willem',
  accessToken: null,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN': {
      return {
        ...state,
        me: action.payload.profile,
        accessToken: action.payload.token,
      };
    }
    case 'LOGOUT': {
      return initialState;
    }
    default:
      return state;
  }
}
