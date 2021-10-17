import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';
import history from './history';
import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';
import Loans from './pages/Loans';
import Payments from './pages/Payments';
import Staff from './pages/Staff';
import { authenticate } from './store/actions/authActions';

function App({ authenticate }) {
	useEffect(() => {
		const userData = JSON.parse(localStorage.getItem('userData'));
		if (
			!!userData.token &&
			!!userData.userId &&
			new Date().getTime() < userData.expiresAt
		) {
			authenticate(userData.token, userData.userId, userData.expiresAt);
			history.push('/dashboard');
		}
	}, [authenticate]);
	return (
		<>
			<Router history={history}>
				<Route component={Auth} exact path='/' />
				<Header />
				<Switch>
					<PrivateRoute component={Dashboard} exact path='/dashboard' />
					<PrivateRoute component={Staff} path='/staff' />
					<PrivateRoute component={Loans} path='/loans' />
					<PrivateRoute component={Payments} path='/payments' />
				</Switch>
			</Router>
		</>
	);
}
const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
	authenticate,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
