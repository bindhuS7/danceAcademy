import React, { useEffect, useState } from 'react'
import axiosInstance from '../Helper/AxiosInstance';

const ViewMemberShip = () => {

    let [state,setState]=useState([]);


    useEffect(()=>{
  
      let token=localStorage.getItem("token");
      async function ViewData(){
  let {data}=await axiosInstance.get("/dancecourses/getall",{headers:{Authorization:`Bearer ${token}`}});
  console.log(data.data);
  setState(data.data);
  console.log(state);
      }
  ViewData();
  
    },[])
  
  
   
  

  return (
    <div id="viewBranch">
    <h1 >View Course</h1>
    
    <table  cellPadding={2} cellSpacing={5} border={3} >
      <tr><th>Duration</th><th>fee</th><th>DanceType</th></tr>
    {state.map((e)=>{
      return(
<tr>
<td>{e.courseDurationInMonths}</td>

<td>{e.fee}</td>

<td>{e.type}</td>

</tr>
      )
    })}
    
    </table>
    
        </div>
  )
}

export default ViewMemberShip