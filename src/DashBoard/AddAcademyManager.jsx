import React, { useState } from 'react'
import axiosInstance from '../Helper/AxiosInstance';
 import { useNavigate } from 'react-router-dom';
import {AiFillEyeInvisible,AiFillEye } from "react-icons/ai";
import "../Component/Register.css"
import { ToastContainer,toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"

const AddAcademyManager = () => {


  let [state,setState]=useState({
    userName:"",
    email:"",
    password:"",
    gender:"",
    phone:"",
    dob:""
})
let[istate,setIstate]=useState(false);
let handleToggle=()=>{
    setIstate(!istate);
}
let navigate=useNavigate();

let {userName,email,password,gender,phone,dob}=state;

let handleChange=(e)=>{
    let {name,value}=e.target;
    setState({...state,[name]:value});
}

let handleSubmit= async (e)=>{
   
e.preventDefault();
let token=localStorage.getItem("token")
console.log(state);
try{
let payload={userName, email, password,  gender, phone, dob};
console.log(payload);
await axiosInstance.post("/academymanagers/save",payload,{headers:{
  Authorization:`Bearer ${token}`
}});


navigate("/admindashboard/viewAcademyManager");
toast.success("data inserted Successfully",{position:toast.POSITION.TOP})

}catch(error){
  if(error){
    console.log(error);
alert("enter proper details")}

}
setState({
username:"",
email:"",
password:"",
gender:"",
phonenum:"",
dob:""
})

}
  return (
    

<div id="register1">
            <ToastContainer/>
    <form action=""  method='post'>
       {/* <fieldset > */}
        <legend><i> Enter Academy Manager Details</i></legend>
        <table>
           <tr><td> <input id='input' type="text" name="userName" className='inputhw' required placeholder='username' onChange={handleChange}/></td></tr>
           <tr><td> <input id='input' type="email" name="email" className='inputhw' required placeholder='Email Address' onChange={handleChange} /></td></tr>
           <tr><td> <input id='input' type={istate? "text":"password"} name="password" className='inputhw' required placeholder='password' onChange={handleChange}  />

           {istate?<AiFillEye onClick={handleToggle}/> :<AiFillEyeInvisible onClick={handleToggle}/>}
           </td></tr>
           <tr><td> <input  id='input' type="number" name="phone"  className='inputhw' required placeholder='phone number' onChange={handleChange}/></td></tr>
           <tr><td>Gender<br/> <input type="radio" name="gender" value="female" required onChange={handleChange} />Female
           <input type="radio" name="gender" value="male" required  onChange={handleChange}/>Male
           <input type="radio" name="gender" value="other" required onChange={handleChange} />Other
           
           </td></tr>
           <tr><td>DOB<input id='input' type="date" name="dob" className='inputhw' required onChange={handleChange}/></td></tr>
<tr><td><button type='submit' onClick={handleSubmit}>SignUp</button></td></tr>
        </table>
       {/* </fieldset> */}
    </form>
    </div>
  )
}

export default AddAcademyManager