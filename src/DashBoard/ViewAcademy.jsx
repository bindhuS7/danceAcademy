import React, { useEffect, useState } from 'react'
import axiosInstance from '../Helper/AxiosInstance';
import { Link } from 'react-router-dom';


const ViewAcademy = () => {

  let [state,setState]=useState([]);


  useEffect(()=>{

    let token=localStorage.getItem("token");
    async function ViewData(){
      try{
let {data}=await axiosInstance.get("/academies/getall",{headers:{Authorization:`Bearer ${token}`}});
console.log(data.data);
setState(data.data);
console.log(state);
}catch(err){
  alert('login first')
}

    }
ViewData();

  },[])
let token=localStorage.getItem("token");

  let handleDelete= async (id)=>{
    try{
 await axiosInstance.delete(`/academies/delete/${id}`,{headers:{Authorization:`Bearer ${token}`}})
  window.location.assign('/adminDashBoard/ViewAcademy');
    }catch(error){
      console.log("error");
      alert("can't delete untill branch is deleted")
    }
  }
  // await axiosInstance.delete(`academies/delete/${id}`);
  

  return (
    <div id='ViewAcademy'>
    <h1 >View Academy</h1>
    
    <table id="viewAcademytab" Padding={25} cellSpacing={3} border={5} >
      <tr><th>Academy Id</th><th>AcademyName</th><th>Contact</th><th>Description</th><th>Email</th><th>Delete</th><th>Add Branch</th><th>Edit</th></tr>
    {state.map((e)=>{
      return(
<tr>
  <td>{e.id}</td>
<td>{e.academyName}</td>

<td>{e.contact}</td>
<td>{e.description}</td>
<td>{e.email}</td>
<td><button onClick={()=>{handleDelete(e.id)}}>Delete</button></td>
<td><Link to={`/AddBranch/${e.id}`}><button>Add Branch</button></Link></td>
<td><Link to={`/UpdateAcademy/${e.id}`}><button>Edit</button></Link></td>
</tr>
      )
    })}
    
    </table>
    
        </div>
  )
}

export default ViewAcademy