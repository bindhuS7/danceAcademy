import React from 'react'
import Register from './Register/Register'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Nav from './Register/Nav';
import Home from './Register/Home';
import Login from './Register/Login';
import AdminRegister from './Admin/AdminRegister';
import ProtectedRoute from './routes/ProtectedRoute';
import AdminDashBoard from './Register/AdminDashBoard';
import AddAcademyManager from './DashBoard/AddAcademyManager';
import ViewAcademyManager from './DashBoard/ViewAcademyManager';
import ViewBranch from './DashBoard/ViewBranch';
import ViewCourse from './DashBoard/ViewCourse';
import ViewAcademy from './DashBoard/ViewAcademy';
import View from './View/View';
import Update from './View/Update';

import Addacademy from './View/Addacademy';
import UpdateAcademy from './View/UpdateAcademy';
import AddBranch from './View/AddBranch';
import UpdateBranch from './View/UpdateBranch';
import AddCourse from './View/AddCourse';

import UpdateCourse from './View/UpdateCourse';
import Membership from './Register/Membership';

import ViewMemberShip from './Register/ViewMemberShip';
import ViewMembershipBasedOnUserId from './Register/ViewMembershipBasedOnUserId';
import ViewMembershipBasedOnBranches from './Register/ViewMembershipBasedOnBranches';
import ViewMemebershipByAdmin from './Register/ViewMemebershipByAdmin';
import Courses from './Register/Courses';






const App = () => {
  return (
    
   <Router>
  <Nav/>

  <Routes>

    <Route path='/' element={<ProtectedRoute><Home/></ProtectedRoute>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/adminRegister' element={<AdminRegister/>}/>
    <Route path='/Membership' element={<Membership/>}/>
    <Route path='/ViewMembership' element={<ViewMemberShip/>}/>
    <Route path='/Courses/:id' element={<Courses/>}/>
    
    <Route path='/ViewMembershipBasedOnBranches' element={<ViewMembershipBasedOnBranches/>}/>
    {/* <Route path='/MembershipRegister/:id/:bid/:uid' element={<MembershipRegister/>}/> */}
    <Route path='/ViewMembershipBasedOnUserId' element={<ViewMembershipBasedOnUserId/>}/>
    <Route path='/ViewMemebershipByAdmin/:id' element={<ViewMemebershipByAdmin/>}/>
    
    <Route path='/ ViewMembershipBasedOnBranches' element={ <ViewMembershipBasedOnBranches/>}/>
   
    <Route path='/login'element={<Login/>}/>
    <Route path='/adminDashBoard' element={<AdminDashBoard/>}>
    <Route path='/adminDashBoard/AddAcademyManager' element={<AddAcademyManager/>}/>
    <Route path='/adminDashBoard/ViewAcademyManager' element={<ViewAcademyManager/>}/>
    <Route path='/adminDashBoard/ViewBranch' element={<ViewBranch/>}/>
    <Route path='/adminDashBoard/ViewCourse' element={<ViewCourse/>}/>
    <Route path='/adminDashBoard/ViewAcademy' element={<ViewAcademy/>}/>
    
    </Route>
    <Route path='View/:id' element={<View/>}/>
    <Route path='/Update/:id' element={<Update/>}/>
    <Route path='/Addacademy/:id' element={<Addacademy/>}/>
    <Route path="/UpdateAcademy/:id" element={<UpdateAcademy/>}/>
    <Route path="/AddBranch/:id" element={<AddBranch/>}/>
    <Route path="/UpdateBranch/:id" element={<UpdateBranch/>}/>
    <Route path="/AddCourse/:id" element={<AddCourse/>}/>
    {/* <Route path="/UploadImage/:id" element={<UploadImage/>}/> */}
    <Route path="/UpdateCourse/:id" element={<UpdateCourse/>}/>
    
   </Routes>
   </Router>
  )
}

export default App