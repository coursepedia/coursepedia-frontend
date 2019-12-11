import React, { useState } from "react";
import "../../assets/css/style.css";
import "../../assets/css/bootstrap.min.css";
import axios from "axios";

export default function Login() {
	const [user, setUser] = useState({ email: "", password: "" });
	const [data, setData] = useState(null)

	const handleChange = event => {
		setUser({
			...user,
			[event.target.name]: event.target.value
		});
	};

	const handleSubmit = event => {
		event.preventDefault();
		console.log(user)
		// axios.post(`https://www.coursepediabackend.herokuapp.com/users/login`, user)
		// 	.then(result => {

		// 		console.log(result);
		// 		// props.history.push("/");
		// 	})
		// 	.catch(error => console.log(error.stack));

		axios.post("https://www.coursepediabackend.herokuapp.com/users/login", user)
		.then(result => {
			// if (result.response.status == 200) {
				setData(result)
				console.log(data)
			// }
		})
		.catch(error => {
			console.log(error)
		})
	};

	return (
		<div className="login hero-section container d-flex justify-content-center align-items-center">
			<div className="col-lg-6 align-self-center">
				<form className="hero-form align-self-center" onSubmit={handleSubmit}>
					<input type="email" placeholder="E-mail" name="email" onChange={handleChange} value={user.email} />
					<input type="password" placeholder="Password" name="password" onChange={handleChange} value={user.password} />
					<button className="site-btn" >Log In</button>
				</form>
			</div>
		</div>
	);
}

// return (
// 	<div className="login hero-section">
// 		{/* <div className="container d-flex"> */}
// 		<div class="d-flex justify-content-center">

// 			{/* <div className="col-lg-6 align-self-center"> */}
// 				<form className="hero-form"  style={{width: '25%'}}>
// 					<input type="email" placeholder="E-mail" name='email' onChange={handleChange} value={user.email}/>
// 					<input type="password" placeholder="Password" name='password' onChange={handleChange} value={user.password}/>
// 					<button className="site-btn">Log In</button>
// 				</form>
// 			{/* </div> */}
// 		</div>
// 	</div>
// );
// }

// coursepediabackend.herokuapp.com
