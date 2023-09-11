// import React, { useState } from 'react'
// import axiosInstance from '../Helper/AxiosInstance';
// import {  useParams } from 'react-router-dom';

// const MembershipRegister = () => {
//   let [state,setState]=useState({
//     dateOfJoining:"",
//     memberShipEndDate:"",
//     status:"",
//     totalFee:""
//   });
//   let token=localStorage.getItem("token");
//   let {bid}=useParams();
//   let {id}=useParams();
//   let {uid}=useParams();
//   let handleChange=(e)=>{
//     console.log("enter");
//     let {name,value}=e.target;
//     setState({...state,[name]:value});
//    console.log(state.dateOfJoining);
//    console.log("exit");
//   }
//   let {dateOfJoining,memberShipEndDate,status,totalFee}=state
//   let handleSubmit=async (e)=>{
//     e.preventDefault();
//     let payload={dateOfJoining,memberShipEndDate,status,totalFee};
//         console.log("upto axios");
        
       
//       //  navigate('/adminDashBoard/ViewCourse');
   
//   }
//   return (
//     <div>
//       <form action="">

//       <table>
//       <tr>
//         <td><input type="date" name='dateOfJoining' placeholder='dateOfJoining' onChange={handleChange} /></td>
//       </tr>
//       <tr>
//         <td><input type="date" name='memberShipEndDate' placeholder='memberShipEndDate' onChange={handleChange} /></td>
//       </tr>
//       <tr>
//         <td><input type="text" name='status' placeholder='status' onChange={handleChange} /></td>
//       </tr>
//       <tr>
//         <td><input type="number" name='totalFee' placeholder='totalFee' onChange={handleChange} /></td>
//       </tr>
//       <tr><td><button onClick={handleSubmit}>submit</button></td></tr>
//       </table>

//       </form>
//       </div>
//   )
// }

// export default MembershipRegister