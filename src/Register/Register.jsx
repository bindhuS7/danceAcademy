import React, { useState } from 'react'
import axiosInstance from '../Helper/AxiosInstance';
 import { useNavigate } from 'react-router-dom';
import {AiFillEyeInvisible,AiFillEye } from "react-icons/ai";
import "../Component/Register.css"

const Register = () => {

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
    await axiosInstance.post("/users/save",payload);
    navigate("/login");
  
}catch(error){
    console.log(error);
    alert("enter Proper details")
}


    }


    
    return (
        <div id="register">
          
    <form action="" method='post' >
      
        <legend><i>Register</i></legend>
        <table>
           <tr><td>UserName: <input type="text" name="userName" className='inputhw' required placeholder='username' onChange={handleChange}/></td></tr>
           <tr> <td>Email:<input type="email" name="email" className='inputhw' required placeholder='Email Address' onChange={handleChange} /></td></tr>
           <tr><td> Password:<input type={istate? "text":"password"} name="password" className='inputhw' required placeholder='password' onChange={handleChange}  />
           </td>
           <td id='eye'>  {istate?<AiFillEye onClick={handleToggle}/> :<AiFillEyeInvisible onClick={handleToggle}/>}
             </td></tr>
           <tr><td>Phone Number <input type="number" name="phone"  className='inputhw' required placeholder='phone number' onChange={handleChange}/></td></tr>
           <tr><td>Gender<br/> <input type="radio" name="gender" value="female" required onChange={handleChange} />Female
           <input type="radio" name="gender" value="male" required  onChange={handleChange}/>Male
           <input type="radio" name="gender" value="other" required onChange={handleChange} />Other
           
           </td></tr>
           <tr><td>DOB:<input type="date" name="dob" className='inputhw' required onChange={handleChange}/></td></tr>
<tr><td><button type='submit' onClick={handleSubmit}>SIGNUP</button></td></tr>
        </table>
      
    </form>
    </div>
  )
}

export default Register