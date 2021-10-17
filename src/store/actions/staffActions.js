import defaultApi from '../../apis/defaultApi';
import Staff from '../../models/staff';
import { CREATE_STAFF, GET_STAFF } from '../../types';

export const createStaff = (details) => async (dispatch) => {
	const { firstName, lastName, otherNames, dob, position, department } =
		details;
	const { data } = await defaultApi.post('/staff.json', {
		firstName: firstName,
		lastName: lastName,
		otherNames: otherNames,
		dob: new Date(dob),
		position: position,
		department: department,
	});
	const newStaff = new Staff(
		data.name,
		firstName,
		lastName,
		otherNames,
		new Date(dob),
		position,
		department
	);

	dispatch({ type: CREATE_STAFF, payload: newStaff });
};

export const getStaff = () => async (dispatch) => {
	const { data } = await defaultApi.get('/staff.json');
	console.log(data);
	const loadedData = Object.keys(data).map((item) => {
		const { firstName, lastName, dob, otherNames, position, department } =
			data[item];
		return new Staff(
			item,
			firstName,
			lastName,
			otherNames,
			dob,
			position,
			department
		);
	});

	dispatch({ type: GET_STAFF, payload: loadedData });
};
