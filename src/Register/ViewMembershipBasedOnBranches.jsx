
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axiosInstance from '../Helper/AxiosInstance';
import "../Component/Memberships.css"
// import Membership from './Membership';
const ViewMembershipBasedOnBranches = () => {
    let [branch,setBranches]=useState([]);


useEffect(()=>{

    let token=localStorage.getItem("token");
    async function ViewData(){
      console.log("hello");
let {data}=await axiosInstance.get("/branches/getall",{headers:{Authorization:`Bearer ${token}`}});
console.log("hell1");
console.log(data.data);
setBranches(data.data);
// console.log(state);
    }
ViewData();



},[])


  return (
    <div id='membershipButtons'>
      {branch.map((e)=>{
        return(
            <Link to={`/ViewMemebershipByAdmin/${e.id}`}><button>{e.id}</button></Link>
        )
    })}
    </div>
  )
}

export default ViewMembershipBasedOnBranches