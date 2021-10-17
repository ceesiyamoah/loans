import React from 'react';
import { Redirect, Route } from 'react-router';
import { connect } from 'react-redux';

const PrivateRoute = ({
	component: Component,
	isLoggedIn,
	token,
	uset,
	...rest
}) => {
	console.log(isLoggedIn);
	console.log(token);
	console.log(uset);
	return (
		<Route
			{...rest}
			render={(props) =>
				true ? <Component {...props} /> : <Redirect to='/' />
			}
		/>
	);
};

//TODO fix auth issue
const mapStateToProps = (state) => ({
	isLoggedIn: state.auth.token && state.auth.userId,
	token: state.auth.token,
	uset: state.auth.userId,
	// &&
	// new Date().getTime() < state.auth.expiresAt,
});

export default connect(mapStateToProps, {})(PrivateRoute);
