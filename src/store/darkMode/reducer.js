const initialState = {
  darkMode: false,
};

export default function darkModeReducer(state = initialState, action) {
  switch (action.type) {
    case 'TOGGLE_MODE': {
      return { ...state, darkMode: action.payload };
    }
    default: {
      return state;
    }
  }
}
