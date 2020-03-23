import * as types from "../actions/actionTypes";

const initialValues = {
  loginInput: {
    username: "",
    password: "",
    department: ""
  },
  isLoading: false,
  login: {},
  error: ""
};

export const loginReducer = (state = initialValues, action) => {
  switch (action.type) {
    case types.LOGIN_INPUT_CHANGE:
      return {
        ...state,
        loginInput: {
          ...state.loginInput,
          [action.payload.inputName]: action.payload.inputValue
        },
        isLoading: false
      };

    case types.POST_LOGIN_START:
      return {
        ...state,
        isLoading: true
      };

    case types.POST_LOGIN_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        login: action.payload,
        isLoading: false
      };

    case types.POST_LOGIN_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };

    case types.POST_CLEAR_LOGIN:
      return initialValues;

    default:
      return state;
  }
};
