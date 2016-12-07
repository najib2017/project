import { ADD_SIGNUP } from './userAction';

const initialState = {
  isRegistering:"true",
  isRegistered:"false",
  isSuccess:"fasle"
};


const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SIGNUP :
      return {
        isRegistering:"false",
        isRegistered:"true",
        isSuccess:"fasle"
      };

    default:
      return state;
  }
};

export default userReducer;

  