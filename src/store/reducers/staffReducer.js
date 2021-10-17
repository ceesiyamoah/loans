import { CREATE_STAFF, GET_STAFF } from '../../types';

const initialState = {
	staffList: [],
};

const staffReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case CREATE_STAFF:
			return { ...state, staffList: [...state.staffList, payload] };
		case GET_STAFF:
			return { ...state, staffList: [...payload] };

		default:
			return state;
	}
};

export default staffReducer;
