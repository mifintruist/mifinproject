import React from "react";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text"
  },
  
  
  {
    title: "Plans",
    path: "/plans",
    icon: <AiIcons.AiOutlineBook />,
    cName: "nav-text"
  },
  {
    title: "Transaction history",
    path: "/transactions",
    icon: <AiIcons.AiOutlineBarChart />,
    cName: "nav-text"
  },
  {
    title: "Charts & Prices",
    path: "/chartsnprices",
    icon: <AiIcons.AiOutlineBarChart />,
    cName: "nav-text"
  },
  {
    title: "Withdrawals",
    path: "/withdrawals",
    icon: <FaIcons.FaMoneyBillAlt />,
    cName: "nav-text"
  },
  {
    title: "Settings",
    path: "/settings",
    icon: <AiIcons.AiFillSetting/>,
    cName: "nav-text"
  },
  {
    title: "Log Out",
    path: "/login",
    icon: <IoIcons.IoMdExit />,
    cName: "nav-text"
  }
];
