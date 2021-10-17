import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Card from '../components/Card';
import { IoCash, IoPeople, IoHourglass } from 'react-icons/io5';
import { getStaff } from '../store/actions/staffActions';

const Dashboard = ({ staff, getStaff }) => {
	const DashDetails = [
		{
			label: 'Staff',
			icon: IoPeople,
			color: 'blue',
			number: staff.length,
			link: '/staff',
		},
		{
			label: 'Payments',
			icon: IoCash,
			color: 'green',
			number: 0,
			link: '/payments',
		},
		{
			label: 'Loans',
			icon: IoHourglass,
			color: 'red',
			number: 0,
			link: '/loans',
		},
	];

	useEffect(() => {
		getStaff();
	}, [getStaff]);
	return (
		<>
			<div className='m-2 flex'>
				{DashDetails.map((item) => (
					<Card styles='m-2' key={item.label} route={item.link}>
						{item.label}{' '}
						<item.icon style={{ display: 'unset' }} color={item.color} /> :
						{item.number}
					</Card>
				))}
			</div>
		</>
	);
};

const mapStateToProps = (state) => ({
	staff: state.staff.staffList,
});

const mapDispatchToProps = {
	getStaff,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
