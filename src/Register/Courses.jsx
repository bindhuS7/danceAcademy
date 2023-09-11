import React, { useEffect, useState } from 'react'
import axiosInstance from '../Helper/AxiosInstance';
import {  useNavigate, useParams } from 'react-router-dom';

const Courses = () => {
    let [state,setState]=useState([]);
    let [uid,setUid]=useState("")//userid
    
    let token=localStorage.getItem("token");
let {id}=useParams();//branch id
let navigate=useNavigate();
  useEffect(()=>{

    
    async function ViewData(){
let {data}=await axiosInstance.get(`/dancecourses/getbybranchid/${id}`,{headers:{Authorization:`Bearer ${token}`}});
console.log(data.data);
setState(data.data);


    }
ViewData();
async function getUserMail(){
  let userEmail=localStorage.getItem("userEmail");
  console.log(userEmail);
  let {data}=await axiosInstance.get(`/users/getbyemail/${userEmail}`,{headers:{Authorization:`Bearer ${token}`}});
  
console.log(data.data.id);
setUid(data.data.id);
}getUserMail()


  },[])
let handleRegsiter=async(cid,id,uid)=>{
   const Response=window.confirm('are you sure? will u register')
   if(Response){
let dateOfJoining=""
let memberShipEndDate=""
let status=""
let totalFee=""
let payload={dateOfJoining,memberShipEndDate,status,totalFee};

  await axiosInstance.post(`/memberships/createmembership?branchId=${id}&danceCourseId=${cid}&userId=${uid}`,payload,{headers:{Authorization:`Bearer ${token}`}})
  alert('Membership added');
  navigate("/ViewMembershipBasedOnUserId")
   }
   else{
    alert('membership not created');
   }
}

  return (
    <div id="viewcourseforRegister">
    <h1 >View Course</h1>
    
    <table  cellPadding={2} cellSpacing={5} border={3} >
      <tr><th>Duration</th><th>fee</th><th>DanceType</th><th>Register</th></tr>
    {state.map((e)=>{
      let cid=e.id;
      //  let uid="USER-101";
      return(
<tr>
<td>{e.courseDurationInMonths}</td>

<td>{e.fee}</td>

<td>{e.type}</td>
<td><button onClick={()=>{handleRegsiter(cid,id,uid)}}>Register</button></td>
{/* <Link to={`/MembershipRegister/${id}/${bid}/${uid}`}>Register</Link> */}
</tr>
      )
    })}
    
    </table>
    
        </div>
        )
  
}

export default Courses