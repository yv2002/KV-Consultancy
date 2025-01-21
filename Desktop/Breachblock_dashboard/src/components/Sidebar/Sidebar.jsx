import React from 'react';
import { FaRegCircleUser } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { LiaFlagUsaSolid } from "react-icons/lia";
import { Outlet } from 'react-router-dom';

const Sidebar = () => {
    

  return (
    <div className="flex   bg-[#1B2431]">
      
      <div className="w-[20%] p-4 bg-[#273142]   h-[800px]">
        <div className="text-2xl text-blue-500 font-bold mb-4">Dash<span className='text-white'>Stack</span></div>
        <ul>
          <li className="mb-2">
            <button className="flex items-center p-2 w-full text-left text-white hover:bg-blue-500 rounded">
              <span className="ml-2">Dashboard</span>
            </button>
            <button className="flex items-center p-2 w-full text-left text-white hover:bg-blue-500 rounded">
              <span className="ml-2">Courses</span>
            </button>
            <button className="flex items-center p-2 w-full text-left text-white hover:bg-blue-500 rounded">
              <span className="ml-2">Favorites</span>
            </button>
            <button className="flex items-center p-2 w-full text-left text-white hover:bg-blue-500 rounded">
              <span className="ml-2">Inbox</span>
            </button>
           
            
          </li>
          <hr className="my-4 w-[210px] border-[#E0E0E0]" />
          <li className="mb-2">
          <button className="flex items-center p-2 w-full text-left text-white hover:bg-blue-500 rounded">
              <span className="ml-2">Dashboard</span>
            </button>
            <button className="flex items-center p-2 w-full text-left text-white hover:bg-blue-500 rounded">
              <span className="ml-2">Products</span>
            </button>
            <button className="flex items-center p-2 w-full text-left text-white hover:bg-blue-500 rounded">
              <span className="ml-2">Favorites</span>
            </button>
            <button className="flex items-center p-2 w-full text-left text-white hover:bg-blue-500 rounded">
              <span className="ml-2">Inbox</span>
            </button>
            <button className="flex items-center p-2 w-full text-left text-white hover:bg-blue-500 rounded">
              <span className="ml-2">Other Lists</span>
            </button>
            <button className="flex items-center p-2 w-full text-left text-white hover:bg-blue-500 rounded">
              <span className="ml-2">Product Stock</span>
            </button>
            <button className="flex items-center p-2 w-full text-left text-white hover:bg-blue-500 rounded">
              <span className="ml-2">Other Lists</span>
            </button>
            <button className="flex items-center p-2 w-full text-left text-white hover:bg-blue-500 rounded">
              <span className="ml-2">Product Stock</span>
            </button>
          </li>
          <hr className="my-4 w-[210px] border-[#E0E0E0]" />
          <button className="flex items-center p-2 w-full text-left text-white hover:bg-blue-500 rounded">
              <span className="ml-2">Settings</span>
            </button>
            <button className="flex items-center p-2 w-full text-left text-white hover:bg-blue-500 rounded">
              <span className="ml-2">Logout</span>
            </button>
        </ul>

      </div>
     

<div className="w-full ">
  <div className=" h-[70px] w-full bg-[#273142] ">
    <div className="relative flex items-center ml-4 ">
    <i class='bx bx-menu text-white  text-2xl mt-3'></i>
    
      <IoSearch  className="absolute top-1/2 left-3  mt-2 ml-9 transform -translate-y-1/2 text-gray-400" />
          
          <input
            type="text"
            className="p-2  pl-10 mt-3  w-[400px] border rounded-3xl ml-3 border-[#323D4E] bg-[#323D4E]  "
            placeholder="Search"/>

           <i class='bx bxs-bell mt-3 ml-[300px] text-white text-2xl '></i>
           <div className="flex items-center mt-3">
           <LiaFlagUsaSolid  className="text-white ml-[15px] space-x-10 text-2xl" />
           <p className='text-white ml-3'>English</p>
           <i class='bx bx-chevron-down text-[#CCCCCC] border  ml-3 rounded-xl'></i>
        </div>
          <div className="flex items-center mt-3">
           <FaRegCircleUser className="text-white  ml-[10px] space-x-10 text-2xl" />
           <p className='text-white ml-3'>Moni</p>
           <i class='bx bx-chevron-down text-[#CCCCCC] border  ml-3 rounded-xl'></i>
        </div>
      </div>
  </div>
  <div className=' h-full w-full'>
     <Outlet/>
   </div>     
 

        
    
      </div>
    </div>
  );
};

export default Sidebar;

