import React from 'react'
import AdminSideBar from './../DashBoard/AdminSideBar';
import AdminMainBar from './../DashBoard/AdminMainBar';
import "../Component/AdminDashBoard.css"
const AdminDashBoard = () => {
  return (
    <div id='dashboard'>
     <div id='sidebar'> <AdminSideBar/></div>
     <div id='mainbar'><AdminMainBar/></div>
    </div>
  )
}

export default AdminDashBoard