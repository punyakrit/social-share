// "use client"  // required for responsive navbar client conversion
import Image from 'next/image';
import React from 'react';

// import { useState } from 'react';
import './Appbarstyle.css';
import { Menu,  X, User } from 'lucide-react'; 
import GoogleLoginButton from "./GoogleLoginButton";
import UserProfile from "./UserProfile";
import { getServerSession } from "next-auth";

import { authOptions } from "@/lib/authOptions";
import Link from "next/link";
async function Appbar() {

  const session = await getServerSession(authOptions)
  return (
    <div>
      <nav className="w-full bg-transparent backdrop-blur-lg fixed top-0 left-0 right-0 z-20">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* LOGO */}
              <Link href="/"  className="text-2xl text-slate-300 font-bold neon-hover-2" >
              Share Hub
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-slate-300 rounded-md outline-none focus:border-gray-400 focus:border"
                 
                >
                  
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className=" grid grid-cols-1 lg:flex justify-self-center pb-3 mt-8  md:pb-0 md:mt-0 "
            >
              <ul className="grid grid-cols-1  md:h-auto items-center justify-center md:flex ">
                {/* Explore */}
             
                  <Link href="/explore"   className="pb-6 text-xl text-slate-300 font-semibold py-2 px-6 text-center border-b-2 md:border-b-0 border-slate-500 md:hover:text-slate-300 md:hover:bg-gray-900 neon-hover"  >
                    Explore
                  </Link>
             
                {/* About */}
             
                  <Link href="/about" className="pb-6 text-xl text-slate-300 font-semibold py-2 px-6 text-center border-b-2 md:border-b-0 border-slate-500 md:hover:text-slate-300 md:hover:bg-gray-900 neon-hover"  >
                    About
                  </Link>
             
                {/* Contact */}
               
                  <Link href="/contact"   className="pb-6 text-xl text-slate-300 font-semibold py-2 px-6 text-center border-b-2 md:border-b-0 border-slate-500 md:hover:text-slate-300 md:hover:bg-gray-900 neon-hover" >
                    Contact
                  </Link>
              
                {!session &&  <GoogleLoginButton />}
          {session &&  <UserProfile/>}
          
       
          
              </ul>
            </div>
          </div>
        </div>
      </nav>
   
    </div>
  );
}


export default Appbar;

 // RESPONSIVE NAVBAR CODE FOR ALL DEVICES AND DIMENSIONS
// function Appbar() {
 

//   // const [navbar, setNavbar] = useState(false);
//   // return (
//   //   <div>
//   //     <nav className="w-full bg-transparent backdrop-blur-md fixed top-0 left-0 right-0 z-20">
//   //       <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
//   //         <div>
//   //           <div className="flex items-center justify-between py-3 md:py-5 md:block">
//   //             {/* LOGO */}
//   //             <Link href="/"  className="text-2xl text-slate-300 font-bold" >
//   //             Share Hub
//   //             </Link>
//   //             {/* HAMBURGER BUTTON FOR MOBILE */}
//   //             <div className="md:hidden">
//   //               <button
//   //                 className="p-2 text-slate-300 rounded-md outline-none focus:border-gray-400 focus:border"
//   //                 onClick={() => setNavbar(!navbar)}
//   //               >
//   //                 {navbar ? (
//   //                   <X size={30} />
//   //                 ) : (
//   //                   <Menu size={30} />
//   //                 )}
//   //               </button>
//   //             </div>
//   //           </div>
//   //         </div>
//   //         <div>
//   //           <div
//   //             className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
//   //               navbar ? 'p-12 md:p-0 block' : 'hidden'
//   //             }`}
//   //           >
//   //             <ul className="h-screen md:h-auto items-center justify-center md:flex">
//   //               {/* Explore */}
             
//   //                 <Link href="/explore"   className="pb-6 text-xl text-slate-300 font-semibold py-2 px-6 text-center border-b-2 md:border-b-0 border-slate-500 md:hover:text-slate-300 md:hover:bg-gray-900 neon-hover"  onClick={() => setNavbar(false)}>
//   //                   Explore
//   //                 </Link>
             
//   //               {/* About */}
             
//   //                 <Link href="/about" className="pb-6 text-xl text-slate-300 font-semibold py-2 px-6 text-center border-b-2 md:border-b-0 border-slate-500 md:hover:text-slate-300 md:hover:bg-gray-900 neon-hover"  onClick={() => setNavbar(false)}>
//   //                   About
//   //                 </Link>
             
//   //               {/* Contact */}
               
//   //                 <Link href="/contact"   className="pb-6 text-xl text-slate-300 font-semibold py-2 px-6 text-center border-b-2 md:border-b-0 border-slate-500 md:hover:text-slate-300 md:hover:bg-gray-900 neon-hover"  onClick={() => setNavbar(false)}>
//   //                   Contact
//   //                 </Link>
            
      
              
          
          
//   //             </ul>
//   //           </div>
//   //         </div>
//   //       </div>
//   //     </nav>
   
//   //   </div>
//   // );
// }