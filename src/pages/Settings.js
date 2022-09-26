import React,{useEffect,useState} from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios';
import {Table,tr,td,thead,tbody,th,Card,Row,Col,Alert,Input, Button} from 'reactstrap';
import { setTextRange } from 'typescript';
function Settings() {
    const [data, setData] = useState();
    const [wallet,setwallet]=useState()
    const[old,setoldp]=useState("")
    const[newp,setnewp]=useState("")
    const[cnewp,setcnewp]=useState("")
    const[x,setx]=useState()
const[err1 ,seterr1]=useState(false)
const[err2 ,seterr2]=useState(false)
const[err3 ,seterr3]=useState(false)
    useEffect(() => {
        const x=window.localStorage.getItem("userid")
        const fetchData = async () => {
          const result = await axios(
            `https://enrollment-a5de6-default-rtdb.firebaseio.com/users/users/${x}/.json`,
          );
      
          setData(result.data);
          if(!!result.data.wallet){
              setwallet(result.data.wallet)
          }

         
        };
      
        fetchData();
        setx(x)
      }, []);
      
  return (
      <>
      <Navbar/>
    <div className='withdrawals'>
        <Row><Alert color='primary'>Mobile One Tap security Coming soon!!!</Alert> </Row>
      <br/>
      <h4>Change Password :</h4>
      <Row>
          <Col sm="8"><Card>
              <div style={{margin:'10px'}}>
              <p>Old Password:</p>
              {err1&& <p style={{color:'red'}}>Wrong password,Try Again</p>}
              <Input value={old} onChange={(e)=>{setoldp(e.target.value)}}/>
         
              <p>Enter New Password</p>
              <Input type='password' onChange={(e)=>{setnewp(e.target.value)}} value={newp}/>
              <p>Cornfirm New Password</p>
              <Input type='password' onChange={(e)=>{setcnewp(e.target.value)}}value={cnewp}/>
              {err2&& <p style={{color:'red'}}>Passwords Dont Match</p>}
              {err3&& <p style={{color:'red'}}>Password too short</p>}
              <br/>
              
              <Button onClick={(e)=>{
if(old!=data.password){
    seterr1(true)
    return
    



}
if(newp!=cnewp){
    seterr2(true)
    return
}
if(newp.length<6){
    seterr3(true)
    return;
}
const patch={password:newp}
axios.patch(`https://enrollment-a5de6-default-rtdb.firebaseio.com/users/users/${x}.json`, patch).then(()=>{
              
    alert("Password updated")
        }).catch((error) => alert( error))}}


              color='warning'>Submit</Button>
              <p>Forgot Password? click <span style={{color:"blue"}}> here</span> to receive an email</p>
              </div>
              </Card> </Col>
         
      </Row>
    </div>
    </>
  )
}

export default Settings
