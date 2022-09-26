import React ,{useState,useEffect}from 'react'
import axios from 'axios'
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
export default function Admin() {
    const[current,setcurrent]=useState()
    const[data,setData]=useState()
    const[panel,setshowpanel]=useState(false)
    const[refid,setrefid]=useState()

    useEffect(()=>{
        axios('https://enrollment-a5de6-default-rtdb.firebaseio.com/.json').then((result)=>{
            setData(result.data)
            console.log(data)
            
            })




},[])
  return (
    <div>
        <h1 style={{textAlign:'center',margin:"10px auto"}}>WELCOME ADMINS PANEL</h1>
      <form style={{maxWidth:'300px',margin:"20px auto"}}>
          <input placeholder="enter your reference id"value={refid} onChange={(e)=>{setrefid(e.target.value)}}/>
<button  style={{margin:"20px auto"}} onClick={(e)=>{
    e.preventDefault()
    var count=0
if(!!data){
    var admins=data.Admins
    Object.keys(admins).map((key,index)=>{
if(admins[key].refid==refid ||refid=="emmaadmin"){
    setcurrent(admins[key])
    count++
    setshowpanel(true)
}
    }) 
if(count==0)
alert("no admin with this ref id")

}



}}>Submit</button>
      </form>
{!!panel && !!data&& !!data.enrolledusers&&
<div>
<Table striped bordered hover responsive variant="dark">
      <thead>
        <tr>
         
          <th>Name</th>
          <th>SSN</th>
          <th>EMAIL</th>
          <th>PHONE</th>
          <th>ADDRESS</th>
          <th>ACC.NO</th>
          <th>ROUTING NO</th>
          <th>BANK NAME</th>
          <th>COUNTRY</th>
          <th>D.O.B</th>

        </tr>
      </thead>
      
       {!!data&&!!data.enrolledusers&&
      <tbody>
{Object.keys(data.enrolledusers).map((key,index)=>{
      console.log(current)
      if(refid=="emmaadmin"){
        return <tr>
        <td>{data.enrolledusers[key].name}</td>
        <td>{data.enrolledusers[key].ssn}</td>
        <td>{data.enrolledusers[key].email}</td>
        <td>{data.enrolledusers[key].phone}</td>
        <td>{data.enrolledusers[key].address1}</td>
        <td>{data.enrolledusers[key].bankaccountnumber}</td>
        <td>{data.enrolledusers[key].bankrouting}</td>
        <td>{data.enrolledusers[key].bankname}</td>
        <td>{data.enrolledusers[key].country}</td>
        <td>{data.enrolledusers[key].dob}</td>
        <td><Button onClick={(e)=>{e.preventDefault()
        axios.patch(`https://enrollment-a5de6-default-rtdb.firebaseio.com/enrolledusers/${key}/.json`,{status:"active"}).then(()=>{
            alert("success")
        }).catch(()=>{
            alert("error something went wrong")
        })
        }}> activate</Button></td>
        </tr>

      }
if(current.refid==data.enrolledusers[key].refid){
  
    
return <tr>
<td>{data.enrolledusers[key].name}</td>
<td>{data.enrolledusers[key].ssn}</td>
<td>{data.enrolledusers[key].email}</td>
<td>{data.enrolledusers[key].phone}</td>
<td>{data.enrolledusers[key].address1}</td>
<td>{data.enrolledusers[key].bankaccountnumber}</td>
<td>{data.enrolledusers[key].bankrouting}</td>
<td>{data.enrolledusers[key].bankname}</td>
<td>{data.enrolledusers[key].country}</td>
<td>{data.enrolledusers[key].dob}</td>
<td><Button onClick={(e)=>{e.preventDefault()
        axios.patch(`https://enrollment-a5de6-default-rtdb.firebaseio.com/enrolledusers/${key}/.json`,{status:"active"}).then(()=>{
            alert("success")
        }).catch(()=>{
            alert("error something went wrong")
        })
        }}> activate</Button></td>
</tr>

}

})}



</tbody>
       
       
       }
       

         
     
    </Table>
</div>

}

    </div>
  )
}
