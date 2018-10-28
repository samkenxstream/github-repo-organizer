const initialState = {
  loggedIn: false
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SET_ACCESS_TOKEN':
      return {
        ...state,
        accessToken: action.access_token,
        loggedIn: true
      };
    case 'SET_REPOSITORIES':
      return {
        ...state,
        repositories: [
          ...(state.repositories || []),
          ...action.repositories
        ]
      };
    case 'SET_USER':
      return {
        ...state,
        user: action.user
      };
    default:
      return state;
  }
};

export default reducer;