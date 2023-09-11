import React, { useState } from 'react'
import axiosInstance from '../Helper/AxiosInstance';
import { useNavigate } from 'react-router-dom';
import {AiFillEyeInvisible,AiFillEye } from "react-icons/ai";



const Login = () => {
  let[state,setState]=useState({
    userEmail:"",
    password:""
  });
  


  let[istate,setIstate]=useState(false);
    let handleToggle=()=>{
        setIstate(!istate);
    }


  let navigate=useNavigate();
  let {userEmail,password}=state
  let handleChange=(e)=>{

    let {name,value}=e.target;
    setState({...state,[name]:value});
  }
  let handleSubmit=async (e)=>{
    e.preventDefault();
    console.log(state);
    let payload={userEmail,password};
   let {data}=await axiosInstance.post("/authenticate",payload);
   localStorage.setItem("userEmail",userEmail);
  //  alert("login successfull");
 
   console.log(data);
   
   let token=data.token;
   let role=data.role;
   if(token){
   window.localStorage.setItem("token",token);
   window.localStorage.setItem("role",role);
   alert(`${userEmail} logged in sucessfully`);
   navigate('/');
   }else{
    window.localStorage.removeItem("token",token);
   window.localStorage.removeItem("role",role);
   }


  }
  return (<div id="login">
    <form action="">
       
        <legend><i>Login form</i></legend>
        <table>
        <tr>
          <td>Email: <input type="email" name="userEmail" className='inputhw' required placeholder='Email Address' onChange={handleChange} /></td></tr>

           <tr>
            <td> Password:<input type={istate? "text":"password"} name="password" className='inputhw'  required placeholder='password' onChange={handleChange} />
             
            <td id='eye'>  {istate?<AiFillEye onClick={handleToggle}/> :<AiFillEyeInvisible onClick={handleToggle}/>}
             </td>
           </td>
          </tr>
           <tr><td><input type="checkbox" />Remember me</td></tr>
           <tr><td><button type='submit' onClick={handleSubmit}>Login</button></td></tr>
        </table>
       
    </form>
    </div>
  )
}

export default Login