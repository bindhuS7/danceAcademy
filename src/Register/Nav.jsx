import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "../Component/Nav.css"
import image from "../images/logo1.jpeg"
import axiosInstance from '../Helper/AxiosInstance'
const Nav = () => {
  let navigate = useNavigate()
  let role=localStorage.getItem("role");
  let token=localStorage.getItem("token");





  let handleLogout = ()=>{
    if(window.confirm("ARE YOU SURE?"))
    {
      localStorage.clear()
      navigate("/login")
    }
  }
  
  return (
    <div id="maindiv">
        <div id="maindiv1">
            <div id="logo"><img src={image} alt="hello" id='logo1'/></div>
            <div id="menu">
            <Link to="/" className='link'>Home</Link>
           
           {role==="ROLE_ADMIN" ?<><Link to="/adminDashBoard"  className='link' >Admin_DashBoard</Link> <Link to="/ViewMembershipBasedOnBranches"  className='link' >ViewMembership</Link></> : token && role == "ROLE_USER"? <><Link to="/Membership"  className='link' >Branches</Link> <Link  to="/ViewMembershipBasedOnUserId"  className='link' >Membership</Link></>  : null}
           {/* <Link to="/Membership"  className='link' >Membership</Link> */}
           {/* {role==="ROLE_USER"?<Link to="/Membership"  className='link' >Membership</Link>:<Link ></Link>} */}
          {token ? <Link to="/"  className='link' onClick={handleLogout}>Logout</Link> : 
          <>
          <Link to="/register"  className='link'>Signup</Link>
          <Link to="/login"  className='link'>Login</Link>
          </> }  
            </div>
        </div>
    </div>
  )
}

export default Nav