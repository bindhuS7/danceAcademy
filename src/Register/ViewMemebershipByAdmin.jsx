import React, { useEffect, useState } from 'react'
import axiosInstance from '../Helper/AxiosInstance';
import { useParams } from 'react-router-dom';


const ViewMemebershipByAdmin = () => {

    let [state,setState]=useState([]);
    let {id}=useParams();

    useEffect(()=>{
  
      let token=localStorage.getItem("token");
      async function ViewData(){
  let {data}=await axiosInstance.get(`/memberships/getmembershipsbybranchid/${id}`,{headers:{Authorization:`Bearer ${token}`}});
  console.log(data.data);
  setState(data.data);
  console.log(state);
      }
  ViewData();
  
    },[])
  
  
  return (
    <div id="viewMembershipByAdmin">
    <h1 >View MemeberShip</h1>
    
    <table  cellPadding={2} cellSpacing={5} border={3} >
    <tr><th>DateOfJoining</th><th>Status</th><th>MemebershipEndDate</th><th>TotalFee</th></tr>
    {state.map((e)=>{
      return(
<tr>
 
<td>{e.dateOfJoining}</td>
<td>{e.status}</td>

<td>{e.memeberShipEndDate}</td>
<td>{e.totalFee}</td>
{/* <td>{e.id}</td> */}
</tr>
      )
    })}
    
    </table>
    
        </div>
  )
}

export default ViewMemebershipByAdmin