import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Card from '../components/Card';
import Input from '../components/Input';
import Dropdown from '../components/Dropdown';
import Button from '../components/Button';
import { createStaff } from '../store/actions/staffActions';

const Staff = ({ staff, createStaff }) => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [otherNames, setOtherNames] = useState('');
	const [dob, setDob] = useState('');
	const [position, setPosition] = useState('');
	const [department, setDepartment] = useState('');
	useEffect(() => {}, []);
	if (!staff.length)
		return (
			<div className='flex justify-center items-center h-screen max-h-screen'>
				<Card>
					<form onSubmit={(e) => e.preventDefault()}>
						<Input
							label='First Name'
							id='firstName'
							onChange={(e) => setFirstName(e.target.value)}
							value={firstName}
						/>
						<Input
							label='Last Name'
							id='lastName'
							onChange={(e) => setLastName(e.target.value)}
							value={lastName}
						/>
						<Input
							label='Other Names'
							id={otherNames}
							onChange={(e) => setOtherNames(e.target.value)}
							value={otherNames}
						/>
						<Input
							type='date'
							label='Date of Birth'
							id='dob'
							value={dob}
							onChange={(e) => {
								setDob(e.target.value);
							}}
						/>
						<Dropdown
							name='Position'
							id='position'
							options={['Manager', 'Head of Department', 'Team Lead', 'Junior']}
							onChange={(e) => {
								console.log(e.target.value);
								setPosition(e.target.value);
							}}
						/>
						<Dropdown
							name='Department'
							id='department'
							options={['HR', 'IT', 'Legal', 'Finance', 'Accounting']}
							onChange={(e) => {
								console.log(e.target.value);
								setDepartment(e.target.value);
							}}
						/>
						<div className='flex items-center justify-center'>
							<Button
								text='Create Staff'
								onClick={() =>
									createStaff({
										firstName,
										lastName,
										otherNames,
										dob,
										position,
										department,
									})
								}
							/>
						</div>
					</form>
				</Card>
			</div>
		);
	return <h1>staff</h1>;
};
const mapStateToProps = (state) => ({
	staff: state.staff.staffList,
});

const mapDispatchToProps = {
	createStaff,
	// getStaff,
};

export default connect(mapStateToProps, mapDispatchToProps)(Staff);
