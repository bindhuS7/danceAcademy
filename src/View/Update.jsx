import React, { useEffect, useState } from 'react'
import axiosInstance from '../Helper/AxiosInstance';
 import { useNavigate, useParams } from 'react-router-dom';
import {AiFillEyeInvisible,AiFillEye } from "react-icons/ai";
import "../Component/Register.css"
import { ToastContainer,toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"

const Update = () => {
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
console.log(state);
try{
let payload={userName, email, password,  gender, phone, dob};
console.log(payload);
await axiosInstance.put("/academymanagers/update",payload,{headers:{Authorization:`Bearer ${token}`}});
navigate("/login");
toast.success("data inserted successfull",{position:toast.POSITION.TOP})

}catch(error){
console.log(error);
alert("enter all details properly")
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
let {id}=useParams();
let token=localStorage.getItem(`token`);

useEffect(()=>{
 
  async function fetch(){
    let {data}=await axiosInstance.get(`/academymanagers/get/${id}`,{headers:{Authorization:`Bearer ${token}`}});
 console.log( data.data);

 
 setState(data.data);
  }
  fetch();
},[])


return (
    <div id="update">
        <ToastContainer/>
<form action="" method='post' id='updateform'>
   
    <legend><i>Update Manager</i></legend>
    <table>
       <tr><td> <input type="text" name="userName" className='inputhw' required placeholder='username' onChange={handleChange} value={userName}/></td></tr>
       <tr><td> <input type="email" name="email" className='inputhw' required placeholder='Email Address' onChange={handleChange} value={email}/></td></tr>
       <tr><td> <input type={istate? "text":"password"} name="password" className='inputhw' required placeholder='password' onChange={handleChange} value={password} />

      
       {istate?<AiFillEye onClick={handleToggle}/> :<AiFillEyeInvisible onClick={handleToggle}/>}
       </td></tr>
       <tr><td> <input type="number" name="phone"  className='inputhw' required placeholder='phone number' onChange={handleChange} value={phone}/></td></tr>
       <tr><td>Gender<br/> <input type="radio" name="gender" value="female" required onChange={handleChange}  />Female
       <input type="radio" name="gender" value="male" required  onChange={handleChange}/>Male
       <input type="radio" name="gender" value="other" required onChange={handleChange} />Other
       
       </td></tr>
       <tr><td>DOB</td></tr><tr><td><input id='dob' type="date" name="dob" className='inputhw' required onChange={handleChange} value={dob}/></td></tr>
<tr><td><button type='submit'  className='button' onClick={handleSubmit}>Update</button></td></tr>
    </table>
  
</form>
</div>
)
}

export default Update