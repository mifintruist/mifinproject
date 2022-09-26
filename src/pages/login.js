import React,{useEffect,useState} from 'react'
import axios from 'axios'
import img from "../logo2.png"
import { format } from 'date-fns';
import Auth from '../Auth';
function Login() {
    const [data, setData] = useState();
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [err, seterr] = useState(false);
   
      
    useEffect(() => {
        window.localStorage.removeItem("auth")
        
        const fetchData = async () => {
            const result = await axios(
                //?title=json-server&author=typicode
              `https://enrollment-a5de6-default-rtdb.firebaseio.com/users/users/.json`,
            );
        
            setData(result.data);
            console.log(data)
         
            }
      fetchData()
        
      }, []);
      
  return (
    <div className='login'>
        
      <form className='form' onSubmit={(e)=>{
          e.preventDefault()
          var count=0
          if(data==null )
          return

          Object.keys(data).map((key,ind)=>{
            if(data[key].email===email && data[key].password===password){
                window.localStorage.setItem("userid",key)
                window.localStorage.setItem("auth",true);
                Auth.authenticate()
                window.location.href="/dashboard"
             count++
            
            }
            
            
            

          })
          if(count==0)
          seterr(true)
      
          


      }}>
   <div style={{display:'flex',justifyContent:'center'}} onClick={()=>{window.href.location="/"}}><img src='https://i.postimg.cc/bJ3fVdzK/mfn.jpg'width={100} style={{borderRadius:'40%'}}/></div>

<h3>Log in</h3>

<div className="form-group">
    <label>Email</label>
    <input type="email" value={email}  onChange={(e)=>{
setemail(e.target.value)

    }} className="form-control" placeholder="Enter email" />
</div>

<div className="form-group">
    <label>Password</label>
    <input type="password" value={password}  onChange={(e)=>{
setpassword(e.target.value)

    }}className="form-control" placeholder="Enter password" />
</div>

<div className="form-group">
    <div className="custom-control custom-checkbox">
        <input type="checkbox" className="custom-control-input" id="customCheck1" />
        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
    </div>
</div>
<div>{err&&<p style={{color:"red"}}>Invalid Credentials Please try Again</p>}</div>
<button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
<p className="forgot-password text-right">
    Forgot <a href="#">password?</a>
</p>
<a href='/' style={{textAlign:'center',textDecoration:'none'}}>Back to Home</a>
<footer style={{textAlign:'center',fontSize:'8px'}}>&copy; Copyright 2022 mifintruist.com</footer>

</form>
    </div>
  )
}

export default Login
