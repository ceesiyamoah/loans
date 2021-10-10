import { AUTHENTICATE } from '../../types';

const initialState = {
	userId: '',
	token: '',
	expiresAt: '',
};

const authReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case AUTHENTICATE:
			// const {userId,token,expiresIn}=payload

			return { ...state, ...payload };

		default:
			return state;
	}
};

export default authReducer;
