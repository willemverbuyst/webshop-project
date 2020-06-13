const initialState = {
  me: null,
  accessToken: null,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN': {
      return {
        ...state,
        me: 'Willem',
        // accessToken: action.payload.token,
      };
    }
    case 'LOGOUT': {
      return initialState;
    }
    default:
      return state;
  }
}
