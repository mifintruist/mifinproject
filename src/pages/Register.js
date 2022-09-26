import React,{useEffect,useState} from 'react'
import axios from 'axios'
import img from "../logo2.png"
import { format } from 'date-fns';
import Auth from '../Auth';
import { v4 as uuidv4 } from 'uuid';
import { updateFunctionDeclaration } from 'typescript';
function Register() {
    const [data, setData] = useState();
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [password2, setpassword2] = useState("");
    const [err, seterr] = useState(false);
   const [fn,setfn]=useState("")
   const [ln,setln]=useState("")

      
    useEffect(() => {
        window.localStorage.removeItem("auth")
        
        
      }, []);
      
  return (
    <div className='login'>
        
      <form className='form' onSubmit={(e)=>{
          e.preventDefault()

          const newpackage = {
            status:"unverified",
            id: uuidv4(),
      firstName: fn,
      lastName: ln,
      email: email,
      password: password,
      amount: 0,
      dateregistered: format(new Date(),"dd/MM/yyyy"),
      verified: "false",
      averageprofit: 0,
      amountofplans: 0,
      notifications: [
        {
          id: 1,
          "message": "Welcome to mifintruist,start earning by simply picking a plan on the Plans page"
        },
        {
            id: 2,
            "message": "Become a Verified Member by picking any plan to get full access to this dashboard,"
          }
      ],
      withdrawals: [
       
      ],
      transactions: [
       
      ],
      
      wallet: ""
    }
  if(password!=password2){
      alert("passwords dont match !!!")
  }
            
          
      else {   axios.post('https://enrollment-a5de6-default-rtdb.firebaseio.com/users/users/.json', newpackage)
              .then(response => {alert("User registered successfully")
              Auth.authenticate()
              window.localStorage.setItem("auth",true)
              window.localStorage.setItem("userid",response.data.name)
              console.log(response);

              window.location.href="/dashboard";
        })
              .catch(error => {
                alert("userfailed to register")
                seterr(true)
               ;
              });}


      }}>
      <div style={{display:'flex',justifyContent:'center'}} onClick={()=>{window.href.location="/"}}><img src='https://i.postimg.cc/bJ3fVdzK/mfn.jpg'width={100} style={{borderRadius:'50%'}}/></div>

<h3>REGISTER</h3>
<div className="form-group">
    <label>First Name</label>
    <input type="text" value={fn} required onChange={(e)=>{
setfn(e.target.value)

    }} className="form-control" placeholder="Enter email" />
</div>
<div className="form-group">
    <label>Last Name</label>
    <input type="text" value={ln} required onChange={(e)=>{
setln(e.target.value)

    }} className="form-control" placeholder="Enter email" />
</div>
<div className="form-group">
    <label>Email</label>
    <input type="email" value={email} required onChange={(e)=>{
setemail(e.target.value)

    }} className="form-control" placeholder="Enter email" />
</div>

<div className="form-group">
    <label>Password</label>
    <input type="password" value={password} required onChange={(e)=>{
setpassword(e.target.value)

    }}className="form-control" placeholder="Enter password" />
</div>
<div className="form-group">
    <label>Confirm Password</label>
    <input type="password" value={password2} required onChange={(e)=>{
setpassword2(e.target.value)

    }}className="form-control" placeholder="Enter password" />
</div>


<div>{err&&<p style={{color:"red"}}> There was an error!!! Please try Again</p>}</div>
<button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>

<span style={{textAlign:'center'}} >
    Already have an Account? <a href='/login'>Sign in</a>
</span>
<span style={{textAlign:'center',fontSize:'8px'}} >
    By registering you automatically agree to out terms & services and privacy policy
</span>
<a href='/' style={{textAlign:'center',textDecoration:'none'}}>Back to Home</a>
<footer style={{textAlign:'center',fontSize:'8px'}}>&copy; Copyright 2022 mifintruist.com</footer>
</form>


    </div>
  )
}
export default Register
