import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axiosInstance from '../Helper/AxiosInstance';
import "../Component/AddAcademy.css"

const Addacademy = () => {
    let navigate=useNavigate();
    let {id}=useParams();
    let [state,setState]=useState({
        email:"",
        academyName:"",
        description:"",
        contact:""
    });
    let token=localStorage.getItem("token");
    // console.log(token)
    let handleChange=(e)=>{

        let {name,value}=e.target;
        setState({...state,[name]:value});
        console.log(state);
    }
let {email,academyName,description,contact}=state;
    let handleSubmit=async (e)=>{
        console.log("enter handlesubmit");
        e.preventDefault();
        // console.log(state.email);
let payload={email,description,academyName,contact}
try{
    await axiosInstance.post(`/academies/saveacademy?managerId=${id}`,payload,{headers:{Authorization:`Bearer ${token}`}});
    // console.log("data added");
    alert("data added");
    navigate('/adminDashBoard/ViewAcademy')
}catch(error){
    console.log(error);
    alert("enter all details properly");

}

    }
  return (
    <div id="addAcademy">
<form action="" method='post'>
    <legend>Add Academy</legend>
    <table>
    <tr>
        <td> 
        <input type="email" name="email" className='inputhw' required placeholder='Email Address' onChange={handleChange}/>
        </td>
    </tr>
    <tr>
        <td> 
            <input type="text" name="academyName"  className='inputhw' required placeholder='academyName' onChange={handleChange}/>
        </td> 
   </tr> 

    <tr>
        <td> 
            <input type="number" name="contact"  className='inputhw' required placeholder='phone number' onChange={handleChange}/>
        </td> 
   </tr> 
   <tr>

   
        <td> 
            <input type="text" name="description"  className='inputhw' required placeholder='description'  onChange={handleChange}/>
        </td> 
   </tr> 
   
       <tr>
        <td>
            <button onClick={handleSubmit}>add Academy</button>
        </td>
       </tr>
    </table>
</form>



    </div>
  )
}

export default Addacademy