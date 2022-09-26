import React,{useState,useEffect} from 'react'
import Navbar from '../components/Navbar'
import {Row,Col,Card,CardBody,CardText,CardTitle,Button,
    Label,Form,FormGroup,Input,Alert} from "reactstrap"
    import Rodal from 'rodal'
    import 'rodal/lib/rodal.css';
    import QRCode from "react-qr-code";
    import {CopyToClipboard} from 'react-copy-to-clipboard';
import axios from 'axios';
import { format } from 'date-fns'
function Plans() {
    const [showmodal,setshow]=useState(false)
    const [plan,setplan]=useState("")
    const [wallet,setwalet]=useState("")
    const [data, setData] = useState();
    const[x,setx]=useState()
    const addtr=()=>{
        

    }

  useEffect(() => {
      const x= window.localStorage.getItem("userid")
      const fetchData2 = async () => {
        const result = await axios(
          `https://enrollment-a5de6-default-rtdb.firebaseio.com/walletaddress/.json`,
        );
  
        setwalet(result.data);
        console.log(wallet)
      };
    const fetchData = async () => {
      const result = await axios(
        `https://enrollment-a5de6-default-rtdb.firebaseio.com/users/users/${x}/.json`,
      );

      setData(result.data);
      console.log(data)
    };

    fetchData();
    fetchData2();
    setx(x)
  }, []);
  return (<>
 
<Navbar/>
<Rodal visible={showmodal} width={400} height={600} onClose={()=>{
     setshow(false)
 }}>
          <div style={{display:'flex',flexDirection:'column',alignItems:"center",justifyContent:'center'}}><Alert>
    <h4 className="alert-heading">
      Listening For Payment to this Address for {plan} PLAN!!
    </h4>
     <hr />
    <p className="mb-0">
      Click Proceed if PaymenT has been made</p>
  </Alert>
          <div className="lds-ripple"><div></div><div></div></div>
          <div style={{margin:"auto"}}><QRCode value={wallet} size={250} /></div></div>
          <div style={{display:'flex',justifyContent:'center',gap:'2px'}}>
<p>{wallet}</p>
<CopyToClipboard text={wallet}
          onCopy={() => {}}>
          <button>Copy</button>
        </CopyToClipboard>

          </div>
         
          <Row>
              <Col sm="6"> <Card><Button onClick={()=>{setshow(false)}}  color='danger'> Cancel</Button></Card></Col>
              <Col sm="6"> <Card><Button onClick={()=>{
            const cars = {
                id:parseInt(1 + Math.random() * (1000000 - 1)),
                plan:plan,
                date:format(new Date(),"dd/MM/yyyy"),
                status:"pending"
    
            }
    const trucks = data.transactions;
    
    // Method 1: Concat
    const combined1 = [].concat(cars, trucks);
    console.log(combined1)
            const Transactiontopatch={transactions:combined1}
            axios.patch(`https://enrollment-a5de6-default-rtdb.firebaseio.com/users/users/${x}.json`, Transactiontopatch).then(()=>{
                
                
                    }).catch((error) => alert( error))
              
    
            setshow(false)
            }}color='success'> Proceed</Button></Card></Col>
          </Row>
        </Rodal>
    <div className='plans'>

      <p style={{textAlign:"center"}}>Mifintruist offer a diverse and splendid invesment portfolio opportunity to those looking to invesment in our firm. We deliver investors modern ways of increasing value of assets dedicated to our company through united states treasury bonds making sure that we gurantee investors with safe returns and reliable investment portfolios. Mifintruist uses a sophistosticated blockchain techonoly to ensure security and investors confidence which also makes invesment easy and straight forward for on-looking and potential investors. We based our ideology primaryly on client satisaction because which aim at exceeding your expectations and we go stellar length to provide you with an adequate investment environment. The modern company must be data-driven, innovative, able to scale and respond to market dynamics rapidly. We have perfected on this and therefore created a platform to make sure your investment goals are reached and in addition we have made our invesmet portfolio easy to navigate and also have a group of team who will be of assistant when needed.

</p>
<h4>Tailored Investment Plans :</h4>
    <Row>
  <Col sm="4">
    <Card body
    inverse
    style={{
     
      borderColor: '#060b26'

    }} className="text-center bcbg">
      <CardTitle tag="h3" style={{color:"greenyellow",zIndex:'3'}}>
        BLOCKCHAIN INVESTMENT
      </CardTitle>
      <p style={{zIndex:'3'}}>PROFITS:2% Daily(less than $5000) </p>
      <p style={{zIndex:'3'}}>PROFITS:2.7% Daily(greater than $5000) </p>
      <p style={{zIndex:'3'}}>BASE DEPOSIT: $500</p>
      <p style={{zIndex:'3'}}>MAXDEPOSIT: UNBOUNDED</p>
    
      <h6 style={{zIndex:'3'}}>FASTEST WITHDRAWAL PROCESS</h6>
      <Button style={{zIndex:'3'}} color='warning' onClick={()=>{
          
          setplan("BLOCKCHAIN INV")
          setshow(true)}}>ADD TO PORTFOLIO</Button>
    </Card>
  </Col>
  <Col sm="4">
    <Card body
    inverse
    style={{
      backgroundColor: '#060b26',
      borderColor: '#060b26'
    }} className="text-center gdbg">
      <CardTitle tag="h3" style={{color:"greenyellow",zIndex:"3"}}>
       GOLD & PETROLEUM PRODUCTS
      </CardTitle>
      <p style={{zIndex:'3'}}>PROFITS:3.3% Daily (less than $7500)</p>
      <p style={{zIndex:'3'}}>PROFITS:4.6% Daily (more than $7500)</p>
      <p style={{zIndex:'3'}}>MININVEST: $1000</p>
      <p style={{zIndex:'3'}}>MAXINVEST: $4999</p>
      <p style={{zIndex:'3'}}>DURATION: FLUID</p>
      <h6 style={{zIndex:'3'}}>FASTEST WITHDRAWAL PROCESS</h6>
      <Button style={{zIndex:'3'}}onClick={()=>{
          
          setplan("GOLD & PETROLEUM")
          setshow(true)}} color='warning'>ADD TO PORTFOLIO</Button>
    </Card>
  </Col>
  <Col sm="4">
    <Card body
    inverse
    style={{
      backgroundColor: '#060b26',
      borderColor: '#060b26'
    }} className="text-center rebg">
      <CardTitle tag="h3" style={{color:"greenyellow",zIndex:'3'}}>
        REAL ESTATE PLAN
      </CardTitle>
      <p  style={{zIndex:'3'}}>PROFITS:1.7% DAILY (less than $1000) </p>
      <p  style={{zIndex:'3'}}>PROFITS:2.5% DAILY (more than $1000) </p>
      <p  style={{zIndex:'3'}}>BASE DEPOSIT: $1,000</p>
      <p  style={{zIndex:'3'}}>MAX DEPOSIT: UNBOUNDED</p>
      <p  style={{zIndex:'3'}}>DURATION: FLUID</p>
      
      <h5  style={{zIndex:'3'}}>FASTEST WITHDRAWAL PROCESS</h5>

      <Button style={{zIndex:'3'}} onClick={()=>{
          
          setplan("REAL ESTATE")
          setshow(true)}}color='warning'>ADD TO PORTFOLIO</Button>
    </Card>
  </Col>
</Row>
<br/>

 
    </div>
    </>
  )
}

export default Plans
