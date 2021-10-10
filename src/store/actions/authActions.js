import authentication from '../../apis/authentication';
import { AUTHENTICATE } from '../../types';

export const signup = (email, password) => async (dispatch) => {
	const {
		data: { idToken, localId, expiresIn },
	} = await authentication.post(
		'accounts:signUp?key=AIzaSyALepdn4xJXZunhZ3K_Q6c31BoacE228J4',
		{ email: email, password: password, returnSecureToken: true }
	);

	const expiryString = `${new Date().getTime() + 1 * expiresIn * 1000}`;
	saveData(idToken, localId, expiryString);
	dispatch(authenticate(idToken, localId, expiryString));
};

export const authenticate = (token, userId, expiresAt) => (dispatch) => {
	dispatch({
		type: AUTHENTICATE,
		payload: { token, userId, expiresAt },
	});
};

export const login = (email, password) => async (dispatch) => {
	const response = await authentication.post(
		'accounts:signInWithPassword?key=AIzaSyALepdn4xJXZunhZ3K_Q6c31BoacE228J4',
		{ email: email, password: password, returnSecureToken: true }
	);
	const {
		data: { idToken, localId, expiresIn },
	} = response;
	const expiryString = `${new Date().getTime() + 1 * expiresIn * 1000}`;
	saveData(idToken, localId, expiryString);
	dispatch(authenticate(idToken, localId, expiryString));
};

const saveData = (token, id, expiryTime) => {
	localStorage.setItem(
		'userData',
		JSON.stringify({
			token: token,
			userId: id,
			expiresAt: expiryTime,
		})
	);
};
