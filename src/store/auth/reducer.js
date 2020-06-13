const initialState = {
  me: null,
  accessToken: null,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN': {
      console.log(action.payload);
      return {
        ...state,
        me: action.payload.email,
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
