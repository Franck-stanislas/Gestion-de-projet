import React from 'react'
import { NavLink } from "react-router-dom";
import SignOutLinks from "./SignOutLinks";

const SignInLinks = () =>{
    return(
        <ul className="right">
            <li> <NavLink to='/create'>New Project</NavLink> </li>
            <li> <NavLink to='/'>Log out</NavLink> </li>
            <li> <NavLink to='/' className='btn btn-floating pink lighten-1'>NC</NavLink> </li>
        </ul>
    )
}

export default SignInLinks