import React, { useEffect, useState } from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import Input from '../components/Input';
import { connect } from 'react-redux';
import { signup, login } from '../store/actions/authActions';
import history from '../history';

const Auth = ({ signup, login }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isLogin, setIsLogin] = useState(true);
	const [errorMessage, setErrorMessage] = useState('');

	const submitHandler = () => {
		setErrorMessage('');
		if (!email || !email.includes('@')) {
			setErrorMessage('Please enter a valid email');
			return;
		}
		if (password.length < 6) {
			setErrorMessage('Password should be more than 5 characters');
			return;
		}
		if (isLogin) {
			login(email, password)
				.then((res) => {
					history.push('/dashboard');
				})
				.catch((err) => {
					const message = err.response.data.error.message;
					switch (message) {
						case 'EMAIL_NOT_FOUND':
							setErrorMessage('Email not found');
							break;
						case 'INVALID_PASSWORD':
							setErrorMessage('Invalid Password');
							break;
						case 'USER_DISABLED':
							setErrorMessage('Disabled account');
							break;

						default:
							break;
					}
				});
		} else {
			signup(email, password)
				.then((res) => {
					history.push('/dashboard');
				})
				.catch((err) => {
					const message = err.response.data.error.message;
					switch (message) {
						case 'EMAIL_EXISTS':
							setErrorMessage(
								'The email address is already in use by another account'
							);
							break;
						case 'OPERATION_NOT_ALLOWED':
							setErrorMessage('Password sign-in is disabled for this project');
							break;
						case 'TOO_MANY_ATTEMPTS_TRY_LATER':
							setErrorMessage(
								'We have blocked all requests from this device due to unusual activity. Try again later'
							);
							break;

						default:
							break;
					}
				});
		}
	};

	useEffect(() => {
		if (errorMessage) {
			setTimeout(() => {
				setErrorMessage('');
			}, 5000);
		}
	}, [errorMessage]);
	return (
		<div className='flex justify-center items-center h-screen max-h-screen'>
			<Card>
				<h1 className='text-center text-3xl'>{isLogin ? 'Login' : 'Signup'}</h1>
				{errorMessage && (
					<p className='text-center text-red-500'>{errorMessage}</p>
				)}
				<form
					className='flex flex-col items-center'
					onSubmit={(e) => e.preventDefault()}
				>
					<Input
						type='email'
						id='email'
						label='Email'
						value={email}
						required
						onChange={(e) => setEmail(e.target.value)}
					/>
					<Input
						type='password'
						id='password'
						label='Password'
						value={password}
						required
						onChange={(e) => setPassword(e.target.value)}
					/>
					<div className='flex '>
						<Button
							text={isLogin ? 'Login' : 'Signup'}
							onClick={submitHandler}
						/>
						<Button
							text={isLogin ? 'Switch to Signup' : 'Switch to Login'}
							color='blue'
							onClick={() => {
								setIsLogin((value) => !value);
							}}
						/>
					</div>
				</form>
			</Card>
		</div>
	);
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
	signup,
	login,
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
