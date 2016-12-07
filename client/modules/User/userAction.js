import callApi from '../../util/apiCaller';

export const ADD_SIGNUP = 'ADD_SIGNUP';
// Export Actions
export function addSignup(user) {
  return {
    type: ADD_SIGNUP,
    user,
  };
}
export function formData(user) {
	return(dispatch) => {
		return callApi('signUp', 'post', {
			user: {	
				firstname: user.firstname,
				lastname: user.lastname,
				password: user.password,
				email: user.email,
				number: user.number
			},
		}).then(res => dispatch(addSignup(res.user)))
	};
}

 