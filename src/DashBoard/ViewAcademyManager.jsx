import React, { useEffect , useState} from 'react'
import axiosInstance from '../Helper/AxiosInstance';
 import { Link } from 'react-router-dom';
 
const ViewAcademyManager = () => {
  let [data1, setData1]=useState([]);
    let token=localStorage.getItem("token");
  useEffect(()=>{

async function fetch(){
  try{
  let {data}=await axiosInstance.get("/academymanagers/getall",{headers:{
    Authorization:`Bearer ${token}`
  }});
  console.log(data.data);
setData1(data.data)
  }catch(error){
    alert("login first")
  }
}
fetch();
  },[])


  return (
    <div id='viewAcademyManagers'>{data1.map((e)=>{
return(
  <div id='mangercart'>
    <h6>Manager Id:{e.id}</h6>
    <h6 key={e.id}>Name: {e.userName}</h6>
<h6>Phone:{e.phone}</h6>
<h6>Email: {e.email}</h6>
<h6>Gender: {e.gender}</h6>
<h6>D.O.B: {e.dob}</h6>
<Link to={`/View/${e.id}`}><button>View</button></Link>

</div>


)
    })}</div>
  )
}

export default ViewAcademyManager