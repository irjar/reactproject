import React, {useState} from 'react';
 
{/* Create a registration form */}
function Register(props) {
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
						placeholder="Email" 
						/>
					</div>
				</div>
				<div className="row">
					<div className="column left">
						{/* Password */}
						{/* Pass the state variable value in the value field of input. 
						Update the value using handleChange() */}
						<input type="password" className="form-control" id="password" 
						placeholder="Password" 
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