import React, {useState} from 'react';
import axios from 'axios';
import './Register.css';
import {API_BASE_URL} from '../constants/api';
import { withRouter } from "react-router-dom";

{/* Create a registration form */}
function Register(props) {
	const [state , setState] = useState({ email : "", password : ""})
	
	const handleChange = (e) => {const {id , value} = e.target   
		setState(prevState => ({...prevState,[id] : value }))
    }
	
	const handleSubmitClick = (e) => {
        e.preventDefault();
        if(state.password === state.confirmPassword) {
            sendDetailsToServer()    
        } else {
            props.showError('Passwords do not match');
        }
    }
	
	const sendDetailsToServer = () => {
        if(state.email.length && state.password.length) {
            props.showError(null);
            const payload={"email":state.email, "password":state.password,}
            axios.post(API_BASE_URL+'register', payload).then(function (response) {
                    if(response.data.code === 200){
                        setState(prevState => ({...prevState,
                            'successMessage' : 'Registration successful. Redirecting to home page..'
                        }))
                        redirectToHome();
                        props.showError(null)
                    } else{
                        props.showError("Some error ocurred");
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });    
        } else {
            props.showError('Please enter valid email and password')    
        }
        
    }
	
  const redirectToHome = () => {
        props.updateTitle('Login')
        props.history.push('/home');
    }
	
	
	
	return(
        <div className="container-fluid">
            <form className="form">
				<div className="row">
					<div className="column left">
						{/* Username */}
						{/* Pass the state variable value in the value field of input. 
						Update the value using handleChange() */}
						<input type="username" className="form-control" id="username" 
						placeholder="Username" 
						 />
					</div>
					<div className="column right">
						{/* Email address */}
						{/* Pass the state variable value in the value field of input. 
						Update the value using handleChange() */}
						<input type="email" className="form-control" id="email" 
						placeholder="Email" value = {state.email} onChange={handleChange}
						/>
					</div>
				</div>
				<div className="row">
					<div className="column left">
						{/* Password */}
						{/* Pass the state variable value in the value field of input. 
						Update the value using handleChange() */}
						<input type="password" className="form-control" id="password" 
						placeholder="Password" value={state.password}
                        onChange={handleChange} 
						 />
					</div>
					<div className="column right">
						{/* Confirm password 
						{/* Pass the state variable value in the value field of input. 
						Update the value using handleChange() */}
						<input type="password" className="form-control" id="confirmPassword" 
						placeholder="Confirm password" 
						 />
					</div>
				</div>
				{/* Upload image */}
                <div className="container">
					<img id="picOutput"/>
					<div className="userPic" id="userPicture">
						<label>
							<input type="file" className="form-control" name="userImage" 
							id="registrationImage"  accept="image/gif, image/jpeg, image/png"	
							multiple = "false" />
							{/*<label htmlFor="registrationImage" >Upload Image</label>*/}
						 	<div className="addPicture">Add picture</div>
						</label>
					</div>
				</div>
				



				
				
				
				
				{/* Submit details button */}
                <button className="buttonRegister" type="submit" >Register</button>
            </form>
        </div>
    )
}
	
 
export default Register;