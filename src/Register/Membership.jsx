import React, { useEffect, useState } from 'react'
import axiosInstance from '../Helper/AxiosInstance';
import { Link } from 'react-router-dom';


const Membership = () => {

    let [state,setState]=useState([]);
    let role=localStorage.getItem("role");

  useEffect(()=>{

    let token=localStorage.getItem("token");
    async function ViewData(){
let {data}=await axiosInstance.get("/branches/getall",{headers:{Authorization:`Bearer ${token}`}});
console.log(data.data);
setState(data.data);
console.log(state);
    }
ViewData();

  },[])
let token=localStorage.getItem("token");

  return (
    <div id="MembershipviewBranch">
    <h1 >View Branch</h1>
    
    <table  cellPadding={2} cellSpacing={5} border={3} >
        <tr><th>Branch_id</th><th>Address</th><th>City</th><th>Phone</th><th>Pincode</th><th>CourseInParticularBranch</th></tr>
    {state.map((e)=>{
      return(
        
<tr>
<td>{e.id}</td>

<td>{e.address}</td>

<td>{e.city}</td>
<td>{e.phone}</td>
<td>{e.pincode}</td>

<td><button><Link to={`/Courses/${e.id}`}>Course</Link></button></td>
{/* <td><button onClick={()=>{handleDelete(e.id)}}>Delete</button></td>

<td><button><Link to={`/UpdateBranch/${e.id}`}>Edit</Link></button></td> */}
</tr>
      )
    })}
    
    </table>
    
        </div>
  )
}

 

export default Membership