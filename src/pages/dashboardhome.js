import React,{useState,useEffect} from 'react'
import {Row,Col,Card,CardBody,CardText,CardTitle,Button,
Label,Form,FormGroup,Input,Alert} from "reactstrap"
import Navbar from "../components/Navbar";
import axios from 'axios';
import Charts from './charts';
import { Link, useHistory } from "react-router-dom";
function Dashboardhome() {
const [editshow,setedit] =useState(false)
const [data, setData] = useState();
const [fname, setfname] = useState();
const [lname, setlname] = useState();
const [email, setemail] = useState();
const[x,setx]=useState()
const history = useHistory();

useEffect(() => {
  const x = localStorage.getItem("userid")
  
  const fetchData = async () => {
    const result = await axios(
      `https://enrollment-a5de6-default-rtdb.firebaseio.com/users/users/${x}.json`,
    );

    setData(result.data);
    setfname(result.data.firstName)
    setlname(result.data.lastName)
    setemail(result.data.email)
    console.log(data)
  };

  fetchData();
  setx(x)
}, []);


  return (
    <div>
      <Navbar/>
    <div className='dashboard'>
      <h4>Investment Portfolio</h4>
    <Row>
  <Col sm="4">
    <Card body
    inverse
    style={{
      backgroundColor: 'rgb(98 120 239)',
      borderColor: 'rgb(98 120 239)'
    }} className="text-center">
      <CardTitle tag="h1">
        {!!data?`$${data.amount}`:"loading..."}
      </CardTitle>
      <CardText>
        Account Balance
      </CardText>
      
    </Card>
  </Col>
  <Col sm="4">
    <Card body
    inverse
    style={{
      backgroundColor: 'rgb(98 120 239)',
      borderColor: 'rgb(98 120 239)'
    }} className="text-center">
      <CardTitle tag="h1">
      {!!data?`$${data.averageprofit}`:"loading..."}
      </CardTitle>
      <CardText>
       Average Daily Profit
      </CardText>
      
    </Card>
  </Col>
  <Col sm="4">
    <Card body
    inverse
    style={{
      backgroundColor: 'rgb(98 120 239)',
      borderColor: 'rgb(98 120 239)'
    }} className="text-center">
      <CardTitle tag="h1">
      {!!data?`${data.amountofplans}`:"loading..."}
      </CardTitle>
      <CardText>
        Number of Active Plans
      </CardText>
      
    </Card>
  </Col>
</Row>
<br />
<Row> <Col sm="3"> <Button color='primary' onClick={()=>{window.location.href="/withdrawals"}}> MAKE WITHDRAWAL</Button></Col> </Row>
<br/>
<h4>Profile Details</h4>
<Row>
  <Col sm="6">
    <Card body
    
    style={{
      backgroundColor: 'white',
      borderColor: 'rgb(98 120 239)'
    }} >
      <CardTitle tag="h4">
       Personal Information:
      </CardTitle>{ editshow?<div> <Form>
  <Row form>
    <Col md={6}>
      <FormGroup>
        <Label for="exampleEmail">
          Email
        </Label>
        <Input
          id="exampleEmail"
          name="email"
          value={email}
          type="email"
          onChange={(e)=>{setemail(e.target.value)}}
        />
      </FormGroup>
    </Col>
    <Col md={6}>
      <FormGroup>
        <Label for="examplePassword">
            Firstname
        </Label>
        <Input
          id="examplePassword"
          name="fname"
          value={fname}
          type="text"
          onChange={(e)=>{setfname(e.target.value)}}
        />
      </FormGroup>
    </Col>
    <Col md={6}>
      <FormGroup>
        <Label for="examplePassword">
            Lastname
        </Label>
        <Input
          id="examplePassword2"
          name="lname"
          value={lname}
          type="text"
          onChange={(e)=>{setlname(e.target.value)}}
        />
      </FormGroup>
    </Col>
  </Row>
  
  
  <Button onClick={()=>{
    const usertopatch={
      firstName:fname,
      lastName:lname,
      email:email
    }
axios.patch(`https://enrollment-a5de6-default-rtdb.firebaseio.com/users/users/${x}.json`, usertopatch).then(()=>{
  alert('updated succesffulyy');
  window.location.href="/Dashboard"
  
      }).catch((error) => alert( error))


  }}color='primary'>
    Update
  </Button>
</Form></div>:<>

<p>FirstName :{!!data&&data.firstName}</p>
<p>LastName : {!!data&&data.lastName}</p>
<p>Email : {!!data&&data.email}</p>
<p>Member Since : {!!data&&data.dateregistered}</p>

<p style={{backgroundColor:!!data&&data.status=="unverified"?"red":"teal",padding:'10px',width:'130px',color:'white',textAlign:'center',textTransform:'uppercase'}}> {!!data&&data.status}</p>


<Button color='primary' onClick={()=>{setedit(true)

console.log("clicked")}}>Edit</Button></>
     }
      
    </Card>
  </Col>
  <Col sm="6">
    <Card body
    
    style={{
      backgroundColor: 'white',
      borderColor: 'rgb(98 120 239)'
    }} >
      <CardTitle tag="h4">
       Recent Notifications:
      </CardTitle>
      {!!data&&data.notifications.length > 0 ? (
        <>
          {data.notifications.map(pack => (<div>
            <Alert
        color="primary"
      >
        {pack.message}
      </Alert>
            </div>
          ))}
        </>
      ) : (
        <>Loading...</>
        )}
    
    </Card>
  </Col>
 
</Row>


    </div>
    <Charts/>
    <footer style={{textAlign:'center',fontSize:'14px',marginBottom:"-30px"}}>&copy; Copyright 2022 Coinmax-investment.com</footer>

    </div>
  )
}

export default Dashboardhome
