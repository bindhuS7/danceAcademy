
import React from 'react'
 import { useEffect } from 'react';
import { useState } from 'react'
 import {useParams } from 'react-router-dom'
 import { Link } from 'react-router-dom';
import axiosInstance from './../Helper/AxiosInstance';
const View = () => {
  let [state,setState]=useState([]);
  let {id} =useParams();
  let token= localStorage.getItem("token");
useEffect(()=>{
 
 
 console.log(id,token);
  async function fetch(){
let {data}=await axiosInstance.get(`/academymanagers/get/${id}`,{headers:{Authorization:`Bearer ${token}`}});
 console.log( data.data);
let arr=Object.values(data.data);
console.log(arr);
setState(data.data)
  }
fetch()
},[])
let handleDelete= async (id)=>{
    try{
  await axiosInstance.delete(`/academymanagers/delete/${id}`,{headers:{Authorization:`Bearer ${token}`}})
 window.location.assign('/adminDashBoard/ViewAcademyManager');
    }
    catch(error){
      console.log(error);
      alert("can't delete untill academy is deleted")
    }
}
  
  return (
    <div id='mainview'>
        <div id='view'>
      <h6>Name: {state.userName}</h6>
      <h6>D.O.B: {state.dob}</h6>
      <h6>Email: {state.email}</h6>
      <h6>Phone: {state.phone}</h6>
      <h6>Age:{state.age}</h6>
      <h6>Gender :{state.gender}</h6>
      <div id='button1'>
      <button  className='button'> <Link id='slink' to={`/Update/${state.id}`}>Update</Link></button>
     <button  className='button' onClick={()=>{handleDelete(state.id)}}>Delete</button>
     <button className='button'id='addAcademyButton'> <Link id='slink' to={`/Addacademy/${state.id}`}>Add Academy</Link></button>
     </div>
     </div>
     </div>
     
  )
}

export default View