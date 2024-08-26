import React from "react";
import Sidebar from "../components/sidebar";
import Header from "../components/header";
import AllInbox from "../components/inbox";
import MailBox from "../components/mailbox";
import OneBoxSideBar from "../components/onebox";
import { useSelector } from "react-redux";

const Mail = () => {

  const theme = useSelector((store)=> store.theme)
  const bgColor = theme === "dark" ? "bg-black" : "bg-[#FAFAFA]"
  const borderClr = theme === "dark" ? "border-gray-800" : "border-[#E0E0E0]"

  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full">
        <Header />
        <div className={`${bgColor} w-full flex`}>
        <div div className='w-1/5 px-3'>
            <AllInbox />
            </div>
          <div  className={`border-r border-l ${borderClr} w-3/5`} style={{ minHeight: "calc(100vh - 64px) " }}>
            <MailBox/>
          </div>
          <div className="w-1/5" style={{ minHeight: "calc(100vh - 64px)" }}>
            <OneBoxSideBar/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mail;