import React, { useEffect, useState } from 'react'
import axiosInstance from '../Helper/AxiosInstance';
import { Link } from 'react-router-dom';

const ViewCourse = () => {
  let [state,setState]=useState([]);


  useEffect(()=>{

    let token=localStorage.getItem("token");
    async function ViewData(){
      try{
let {data}=await axiosInstance.get("/dancecourses/getall",{headers:{Authorization:`Bearer ${token}`}});
console.log(data.data);
setState(data.data);
console.log(state);
      }catch(error){
        alert("login first")
      }
    }
ViewData();

  },[])
let token=localStorage.getItem("token");

  let handleDelete= async (id)=>{
    // console.log("enter delete");
     // console.log(id);
    try{
     await axiosInstance.delete(`/dancecourses/delete/${id}`,{headers:{Authorization:`Bearer ${token}`}})

      window.location.assign('/adminDashBoard/ViewCourse');
    }catch(error){
      console.log(error);
      alert("can't delete becuse membership created on that course")
    }
    // console.log("deleted");

  }
  // await axiosInstance.delete(`academies/delete/${id}`);
  


  return (
    <div id="viewCourse">
    <h1 >View Course</h1>
    
    <table  cellPadding="2vmin" cellSpacing={5} border={3} >
      <tr><th>Course Id</th><th>Duration</th><th>fee</th><th>DanceType</th><th>Delete</th><th>Edit</th></tr>
    {state.map((e)=>{
      return(
<tr>
  <td>{e.id}</td>
<td>{e.courseDurationInMonths}</td>

<td>{e.fee}</td>

<td>{e.type}</td>
<td><button onClick={()=>{handleDelete(e.id)}}>Delete</button></td>
<td><Link to={`/UpdateCourse/${e.id}`}><button>Edit</button></Link></td>

</tr>
      )
    })}
    
    </table>
    
        </div>
        )
  
}

export default ViewCourse