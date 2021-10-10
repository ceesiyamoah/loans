import React from 'react';
import { Redirect, Route } from 'react-router';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, isLoggedIn, ...rest }) => {
	return (
		<Route
			{...rest}
			render={(props) =>
				isLoggedIn ? <Component {...props} /> : <Redirect to='/' />
			}
		/>
	);
};

const mapStateToProps = (state) => ({
	isLoggedIn:
		!!state.auth.token &&
		!!state.auth.userId &&
		new Date().getTime() < state.auth.expiresAt,
});

export default connect(mapStateToProps, {})(PrivateRoute);
