import '/src/assets/scss/auth.css'
import '/src/assets/jquery-3.7.1.min.js'
import React, { useState, useEffect } from 'react'

function loginForm() {
	return (

		<form action="" className='login-form' id='loginform'>
			<h2>Login into your account</h2>
			<input type="text" id='name' placeholder="Name" className="name" />
			<input type="password" id='password' placeholder="Password" className="password" />
			<button type="submit" id='submit'>Login</button>
		</form>
	);
}

function registerForm() {
	return (
		<form action="" className='login-form' id='registerform'>
			<h2>Register your account</h2>
			<input type="text" id='name' placeholder="Name" className="name" />
			<input type="email" id='email' placeholder="Email" className="email" />
			<input type="password" id='password' placeholder="Password" className="password" />
			<input type="password" id='cPassword' placeholder="Confirm Password" className="password" />
			<button type="submit" id='submit'>Register</button>
		</form>
	);
}


export default function Auth() {
	const [isLogin, setForm] = useState(true);
	useEffect(() => {
		document.title = "Authorization";
	}, []);

	function changeForm() {
		setForm(current => !current)
		let change = document.getElementById('change');
		isLogin ? change.innerText = "Already have an account? Login" : change.innerText = "First time here? Register";

	}

	return (

		<div className='body'>
			<div className='header'>

			</div>
			<div className='container'>
				{isLogin ? loginForm() : registerForm()}
				<p onClick={changeForm} id='change'>First time here? Register</p>
			</div>

			<div className='footer'>

			</div>
		</div>

	)
}
// import { useState } from 'react'
// import './App.css'

