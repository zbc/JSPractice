import React from 'react';

function Form() {
	const [username, setUsername] = React.useState('');
	const [password, setPassword] = React.useState('');
	const [errorUsername, setErrorUsername] = React.useState('');
	const [errorPassword, setErrorPassword] = React.useState('');
	const handleSubmit = e => {
		e.preventDefault();
		console.log(e.target.elements.username.value);
	};
	const handleUsernameChange = e => {
		const u = e.target.value;
		if (u.length < 8) {
			setErrorUsername('Username needs to be more than 12 digits');
		} else {
			setErrorUsername('');
		}
		setUsername(u);
	};
	const handlePasswordChange = e => {
		setPassword(e.target.value);
	};
	return (
		<form
			onSubmit={handleSubmit}
			style={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignContent: 'center'
			}}
		>
			<label htmlFor="username">Username</label>
			<input
				id="username"
				type="text"
				onChange={handleUsernameChange}
				value={username}
			/>
			{errorUsername ? (
				<div style={{ color: 'red' }}>{errorUsername}</div>
			) : null}
			<label htmlFor="password">Password</label>
			<input
				id="password"
				type="password"
				onChange={handlePasswordChange}
				value={password}
			/>
			<button type="submit">submit</button>
		</form>
	);
}

export default Form;
