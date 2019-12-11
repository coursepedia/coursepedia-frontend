import React, {useState}from "react";
import "../../assets/css/style.css";
import "../../assets/css/bootstrap.min.css";

export default function Login() {

const [user,setUser]=useState({email:'',password:''})

const handleChange = event =>{
    setUser({
        ...user,
        [event.target.name]:event.target.value
    })
}

const handleSubmit = event => {

} 

	return (
		<div className="login hero-section container d-flex justify-content-center align-items-center">
				<div className="col-lg-6 align-self-center">
					<form className="hero-form align-self-center">
						<input type="email" placeholder="E-mail" name='email' onChange={handleChange} value={user.email}/>
						<input type="password" placeholder="Password" name='password' onChange={handleChange} value={user.password}/>
						<button className="site-btn">Log In</button>
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
