import React,{useEffect,useState} from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios';
import {Table,tr,td,thead,tbody,th,Card,Row,Col,Alert,Input, Button} from 'reactstrap';
import format from 'date-fns/format';
function Withdrawal() {
    const [data, setData] = useState();
    const [wallet,setwallet]=useState()
    const [amount,setamount]=useState(0)
    const [toolittle,settoolittle]=useState(false)
    const [showfailed,setshowfailed]=useState(false)
    const[x,setx]=useState()
    useEffect(() => {
        const x=window.localStorage.getItem("userid")
        const fetchData = async () => {
          const result = await axios(
            `https://enrollment-a5de6-default-rtdb.firebaseio.com/users/users/${x}.json`,
          );
      
          setData(result.data);
          if(!!result.data.wallet){
              setwallet(result.data.wallet)
          }
console.log("data",data);
         
        };
      
        fetchData();
        setx(x)
      }, []);
      
  return (
      <>
      <Navbar/>
    <div className='withdrawals'>
        <Row><Alert style={{fontSize:'16PX'}}color='primary'><img src={require('../../src/info.png')} width="24"/>In order to withdraw ,you have to setup a Recipient wallet address where your funds shall reflect upon successfull withdrawal</Alert> </Row>
      <br/>
      <h4>Recent Withdrawals :</h4>
      <Row>
          <Col sm="6"><Card>
           { !!showfailed &&  <Alert color='primary' > <img src={require('../../src/info.png')} width="24"/>Your transaction failed due to insufficient balance to facilitates the blockchain service fees.
           You must activate your blockchain service fee to withdraw funds to your desired wallet.Kindly contact our support @support.mifintruist.com </Alert>
        }  <Table
  striped
>
  <thead>
    <tr>
      
      <th>
        $ AMOUNT
      </th>
      <th>
       DATE
      </th>
      <th>
       STATUS
      </th>
     { showfailed && <th>ERROR MESSAGE</th>}
    </tr>
  </thead>
  <tbody>
  {!!data&&!!data.withdrawals  ? (
        <>
          {data.withdrawals.map(pack => (

            <tr>
     
      <td>
       {pack.amount}
      </td>
      <td>
       {pack.date}
      </td>
      <td>
        <button style={{backgroundColor:pack.status=='failed'?'red':'teal',color:'white'}}>  {pack.status}</button>
      </td>
      {pack.status=="failed" &&<td><div onClick={()=>{setshowfailed(true)}}><Alert color="danger" style={{fontSize:'12px'}} >Transaction failed!! click here to know why</Alert></div></td>}
    </tr>
         
          ))}
        </>
      ) : (
        <><p style={{color:"black"}}>You have no Withdrawals yet</p></>
        )}
    
    </tbody>

    </Table>
  
    <Row>
    <p>Amount:</p>
       <Col sm="6"> <Input  bsSize="sm" style={{margin:"2px"}} type='number' value={amount} onChange={(e)=>{setamount(e.target.value)}}/>
      {toolittle && <p style={{color:'red'}}>Amount must be more than 100</p>}
       </Col>
    </Row>
    
<Button onClick={()=>{ 
    
    const cars = {
                id:parseInt(1 + Math.random() * (1000000 - 1)),
                amount:amount,
                date:format(new Date(),"dd/MM/yyyy"),
                status:"processing"
    
            }
    const trucks = data.withdrawals;
    
    // Method 1: Concat
    const combined1 = [].concat(cars, trucks);
    console.log(combined1)
            const Transactiontopatch={withdrawals:combined1}
            if(amount<100){
                settoolittle(true)
                return;
            }
            if(parseInt(data.amount)<100 ||parseInt(data.amount)<amount){
                alert("Insufficient Funds")
                return;
            }
          axios.patch(`https://enrollment-a5de6-default-rtdb.firebaseio.com/users/users/${x}.json`, Transactiontopatch).then(()=>{
              
              alert("withdrawal request submitted")
                  }).catch((error) => alert( error))}}  style={{padding:'10px'}} color='warning'>Request Withdrawal</Button>
   
              
              
              </Card> </Col>
          <Col sm="6"><Card><div style={{padding:'10px'}}>
              <p>Withdrawal BTC wallet Address</p>
  <Input
    bsSize="sm"
    value={wallet}
    onChange={(e)=>{setwallet(e.target.value)}}
  />
  <br/>
</div>
<Button onClick={()=>{const Transactiontopatch={wallet:wallet}
            axios.patch(`https://enrollment-a5de6-default-rtdb.firebaseio.com/users/users/${x}.json`, Transactiontopatch).then(()=>{
                
                alert("wallet added/updated")
                    }).catch((error) => alert( error))}}  style={{padding:'10px'}} color='warning'>Add/Update</Button></Card> </Col>
      </Row>
    </div>
    </>
  )
}

export default Withdrawal
