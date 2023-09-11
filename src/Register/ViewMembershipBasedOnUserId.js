import React, { useEffect, useState } from 'react'
import axiosInstance from '../Helper/AxiosInstance'
const ViewMembershipBasedOnUserId = () => {
    let [state,setState]=useState([])
    let token=localStorage.getItem("token")
    useEffect(()=>{
        let verify=async()=>{

           
            let userEmail=localStorage.getItem("userEmail");
            console.log(userEmail);
            let {data}=await axiosInstance.get(`/users/getbyemail/${userEmail}`,{headers:{Authorization:`Bearer ${token}`}});
            
          console.log(data.data.id);
          let id1=data.data.id;
          
          async function checkmembership(){
            let {data}=await axiosInstance.get(`/memberships/getallmembershipsbyuserid/${id1}`,{headers:{Authorization:`Bearer ${token}`}});
            console.log(data.data);
            setState(data.data)
          }
          checkmembership();
            
          
          
          }
          verify()
    
    },[])

  return (
    <div id="viewMembershipBasedOnUserId">
    <h1 >View Branch</h1>
    
    <table  cellPadding={2} cellSpacing={5} border={3} >
        <tr><th>DateOfJoining</th><th>Status</th><th>MemebershipEndDate</th><th>TotalFee</th></tr>
    {state.map((e)=>{
      return(
<tr>
<td>{e.dateOfJoining}</td>
<td>{e.status}</td>

<td>{e.memeberShipEndDate}</td>
<td>{e.totalFee}</td>
</tr>
      )
    })}
    
    </table>
    
        </div>
  )
}

export default ViewMembershipBasedOnUserId