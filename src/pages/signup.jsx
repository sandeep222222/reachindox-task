import React from "react";
import Login from "../components/login";
import logo from '../assets/sign-logo.svg'

const signup = () => {
  return (
    <div className="bg-[#25262b] h-[100vh] flex flex-col">
      
      <div className="w-full h-16 flex justify-center items-center border-b border-gray-700">
      <img src={logo} alt="Logo" />
      </div>
      <div className="flex justify-center items-center flex-grow">
        <Login/>
      </div>
      <div className="w-full h-8 flex justify-center items-center border-t border-gray-700 bg-[#25262b]">
        <p className="text-gray-600 font-sans">&copy; 2024 Reachinbox, All rights reserved</p>
      </div>
    </div>
  );
};

export default signup;