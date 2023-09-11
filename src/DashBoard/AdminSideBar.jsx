import React from 'react'

import { Link } from 'react-router-dom';

const AdminSideBar = () => {
  return (
    <div id='sidebar1'>
        <h1>Admin Side Bar</h1>

       <ul id='admintask'>
        <li><button> <Link id='slink' to={'/adminDashBoard/AddAcademyManager'}> Add Academy Manager</Link></button></li>
        <li><button> <Link id='slink' to={'/adminDashBoard/ViewAcademyManager'}> View Academy Manager</Link></button></li>
        <li><button> <Link id='slink' to={'/adminDashBoard/ViewBranch'}> View Branch</Link></button></li>
        <li><button><Link id='slink'  to={'/adminDashBoard/ViewCourse'}> View Course</Link></button></li>
        <li><button> <Link id='slink' to={'/adminDashBoard/ViewAcademy'}> View Academy</Link></button></li>
       </ul>
        
      
       
       
        
       
    </div>
  )
}

export default AdminSideBar