import React ,{useEffect}from "react";
import "./styles.css";
import Admin from "./pages/Admin";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route ,Redirect} from "react-router-dom";
import Data from "./pages/data";
// PAGES
import Home from "./pages/Home";
import Products from "./pages/Plans";
import Tra from "./pages/Transactions";
import Cha from "./pages/charts";
import Withdraw from "./pages/Withdrawal";
import Dashboard from "./pages/dashboardhome";
import Sett from "./pages/Settings";
import Login from "./pages/login"
import Signup from "./pages/Register"
import Auth from "./Auth";
import toast, { Toaster } from 'react-hot-toast';

import 'bootstrap/dist/css/bootstrap.min.css';
export default function App() {

  const setRandomInterval = (intervalFunction, minDelay, maxDelay) => {
    let timeout;
  
    const runInterval = () => {
      const timeoutFunction = () => {
        intervalFunction();
        runInterval();
      };
  
      const delay = Math.floor(Math.random() * (maxDelay - minDelay + 1)) + minDelay;
  
      timeout = setTimeout(timeoutFunction, delay);
    };
  
    runInterval();
  
    return {
      clear() { clearTimeout(timeout) },
    };
  };
  const gettoast=()=>{
    const x=Math.floor(Math.random() * (999 - 0 + 1)) + 0
   var action=""
    if(Data[x].action===1){
action="Withdrew"
    }
    if(Data[x].action===2){
      action="Invested"
          }
          if(Data[x].action===3){
            action="Made Profit of"
                }
const msg=`${Data[x].first_name} ${Data[x].last_name} ${action} ${Data[x].amount}`
    return msg
  }
  const notify = () => toast(gettoast(), {
    duration: 4000,
    position: 'bottom-right',
    // Styling
    style: {},
    className: '',
    // Custom Icon
    icon: '👏🏻',
    // Change colors of success/error/loading icon
    iconTheme: {
      primary: '#000',
      secondary: '#fff',
    },
    // Aria
    ariaProps: {
      role: 'status',
      'aria-live': 'polite',
    },
  });
  useEffect(()=>{

    const interval = setRandomInterval(() => notify(), 6000, 10000);


  },[])
  return (
    <div className="App">
      <Toaster />
      {/*<a
        href="https://wa.me/2348100000000"
        class="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa fa-whatsapp whatsapp-icon"></i>
      </a>*/
}
      <Router>
     
        <Switch>
          <Route path="/" exact component={Home} />
       
          <PrivateRoute path="/plans" component={Products} />
          <Route path="/login" component={Login} />
          <Route path="/xxxadminxxx" component={Admin} />
          <Route path="/register" component={Signup} />
         
          <PrivateRoute path="/transactions" component={Tra} />
          <PrivateRoute path="/Dashboard" component={Dashboard} />
          <PrivateRoute path="/chartsnprices" component={Cha} />
          <PrivateRoute path="/withdrawals" component={Withdraw} />
          <PrivateRoute path="/settings" component={Sett} />
        </Switch>
      </Router>
    </div>
  );
}
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      Auth.getAuth() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login"
          }}
        />
      )
    }
  />
);
