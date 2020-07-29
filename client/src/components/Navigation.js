import React from 'react';
 
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <div>
          <NavLink to="/">Login</NavLink>
          <NavLink to="/Register"> Register</NavLink>
          <NavLink to="/News"> News</NavLink>
       </div>
    );
}
 
export default Navigation;