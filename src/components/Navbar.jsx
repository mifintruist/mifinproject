import React, { useState,useEffect } from "react";

// ICONS
import * as FaIcons from "react-icons/fa"; //Now i get access to all the icons
import * as AiIcons from "react-icons/ai";
import img from "../logo.png"
import { IconContext } from "react-icons";

// ROUTING

import { Link } from "react-router-dom";

// DATA FILE
import { SidebarData } from "./SlidebarData";
import axios from "axios";
// STYLES
import "./Navbar.css";
import { Button } from "reactstrap";

export default function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const [data, setData] = useState();
  const showSidebar = () => setSidebar(!sidebar);
  useEffect(() => {
    const x = localStorage.getItem("userid")
    const fetchData = async () => {
      const result = await axios(
        `https://enrollment-a5de6-default-rtdb.firebaseio.com/users/users/${x}/json`,
      );
  
      setData(result.data);
    

     
    };
  
    fetchData();
  }, []);
  return (
    <>
      <IconContext.Provider value={{ color: "#FFF" }}>
        {/* All the icons now are white */}
        <div className="navbar ">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <img onClick={()=>{window.location.href="/"}}src="https://i.postimg.cc/bJ3fVdzK/mfn.jpg"  width={100}/>
         <h6 style={{color:"#fff",marginRight:"20px"}}>{!!data&& `${data.firstName} ${data.lastName }`}</h6>
        </div>
        <nav className={sidebar ? "nav-menu  active" : "nav-menu "}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle  active">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>

            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
           
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}
