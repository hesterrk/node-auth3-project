import * as types from "../actions/actionTypes";

const initialValues = {
  registerInput: {
    username: "",
    password: "",
    department: "",
  },
  isLoading: false,
  sendUser: {},
  error: ""
};

export const registerReducer = (state = initialValues, action) => {
  switch (action.type) {
    case types.REGISTER_INPUT_CHANGE:
      return {
        ...state,
        registerInput: {
          ...state.registerInput,
          [action.payload.inputName]: action.payload.inputValue
        },
        isLoading: false
      };

    case types.POST_REGISTER_START:
      return {
        ...state,
        isLoading: true
      };

    case types.POST_REGISTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        sendUser: action.payload
      };

    case types.POST_REGISTER_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };

    case types.POST_CLEAR_REGISTER:
      return initialValues;

    default:
      return state;
  }
};