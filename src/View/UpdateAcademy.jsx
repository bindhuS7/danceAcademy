import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axiosInstance from '../Helper/AxiosInstance';


const UpdateAcademy = () => {

    

    let navigate=useNavigate();
    let {id}=useParams();
    let [state,setState]=useState({
        email:"",
        academyName:"",
        description:"",
        contact:"",
       
    });
    let token=localStorage.getItem("token");
    // console.log(token)
    let handleChange=(e)=>{

        let {name,value}=e.target;
        setState({...state,[name]:value});
    }
let {email,academyName,description,contact}=state;
    let handleSubmit=async (e)=>{
        // console.log("enter handlesubmit");
        e.preventDefault();
        // console.log(state.email);
let payload={email,description,academyName,contact,id}
await axiosInstance.put('/academies/update',payload,{headers:{Authorization:`Bearer ${token}`}});
// console.log("data added");
alert("data updated");
navigate('/adminDashBoard/ViewAcademy')
    }

    useEffect(()=>{

let getDetails= async ()=>{

   let  {data}=await axiosInstance.get(`/academies/get/${id}`,{headers:{Authorization:`Bearer ${token}`}})
console.log(data.data);
setState(data.data);
console.log(state.email);
}
getDetails();

    },[])



  return (
    <div id='updateAcademy'><form action="" method='post'>
    <legend>Update Academy</legend>
    <table>
    <tr><td>Email:</td>
        <td> 
        <input type="email" name="email" className='inputhw' required placeholder='Email Address' onChange={handleChange} value={email}/>
        </td>
    </tr>
    <tr>
        <td>AcademyName:</td>
        <td> 
            <input type="text" name="academyName"  className='inputhw' required placeholder='academyName' onChange={handleChange} value={academyName}/>
        </td> 
   </tr> 

    <tr><td>Number: </td>
        <td> 
            
            <input type="number" name="contact"  className='inputhw' required placeholder='phone number' onChange={handleChange} value={contact}/>
        </td> 
   </tr>

   <tr>   
    <td>Description:</td>
        <td> 
            <input type="text" name="description"  className='inputhw' required placeholder='description'  onChange={handleChange} value={description}/>
        </td> 
   </tr> 

 {/* <tr>   
        <td> 
            <input type="text" name="id"  className='inputhw' required placeholder='id'  />
        </td> 
   </tr>  
    */}
       
       <tr>
        <td>
            <button onClick={handleSubmit}>Update Academy</button>
        </td>
       </tr>
    </table>
</form>



    </div>
  )
}

export default UpdateAcademy