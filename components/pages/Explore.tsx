import React from 'react'

import Image from 'next/image';
import Like from '../Like';

import '../Explorestyle.css';
const Explore = () => {
 
  return (
  // components/ArticleCard.js
      <div>
          <h1 className="tracking-in-contract-bck  text-6xl mt-40 mb-20 text-center font-bold text-purple-400 uppercase">Explore</h1>

<div className="container my-12 mb-76 mt-46 mx-auto px-4 md:px-12">
  <div className="flex flex-wrap -mx-1 lg:-mx-4">
    {/* Column */}
    <div className="my-1 hvr-bob px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
      {/* Article */}
      <article className="overflow-hidden rounded-lg shadow-lg">
        <a href="#">
          <img
            alt="Placeholder"
            className="block h-auto w-full"
            src="https://images.unsplash.com/photo-1554774853-aae0a22c8aa4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </a>
        <header className="flex items-center justify-between leading-tight p-2 md:p-4">
          <h1 className="text-lg">
            <a className="no-underline hover:underline text-slate-100" href="#">
            The Power of Personal Branding
            </a>
          </h1>
          <p className="text-slate-400 text-sm">14/5/24</p>
        </header>
        <footer className="flex items-center justify-between leading-none p-2 md:p-4">
          <a
            className="flex items-center no-underline hover:underline text-slate-300"
            href="#"
          >
<img
  alt="Placeholder"
  className="block rounded-full object-cover w-12 h-12"
  src="https://cdn.pixabay.com/photo/2020/09/18/05/58/lights-5580916_1280.jpg"
/>
            <p className="ml-2 text-sm">Emily Johnson</p>
          </a>
    
  <Like/>
         
        </footer>
      </article>
  
    </div>
    <div className="my-1 hvr-bob px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
      {/* Article */}
      <article className="overflow-hidden rounded-lg shadow-lg">
        <a href="#">
          <img
            alt="Placeholder"
            className="block h-auto w-full"
            src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </a>
        <header className="flex items-center justify-between leading-tight p-2 md:p-4">
          <h1 className="text-lg">
            <a className="no-underline hover:underline text-slate-100" href="#">
            Crafting Compelling Content
            </a>
          </h1>
          <p className="text-slate-400 text-sm">18/5/24</p>
        </header>
        <footer className="flex items-center justify-between leading-none p-2 md:p-4">
          <a
            className="flex items-center no-underline hover:underline text-slate-300"
            href="#"
          >
         <img
  alt="Placeholder"
  className="block rounded-full object-cover w-12 h-12"
  src="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
/>
            <p className="ml-2 text-sm">Daniel Smith

</p>
          </a>
       
  <Like/>
         
        </footer>
      </article>
  
    </div>
    <div className="my-1 hvr-bob px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
      {/* Article */}
      <article className="overflow-hidden rounded-lg shadow-lg">
        <a href="#">
          <img
            alt="Placeholder"
            className="block h-auto w-full"
            src="https://images.unsplash.com/photo-1592890288564-76628a30a657?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </a>
        <header className="flex items-center justify-between leading-tight p-2 md:p-4">
          <h1 className="text-lg">
            <a className="no-underline hover:underline text-slate-100" href="">
            Navigating Social Media 
            </a>
          </h1>
          <p className="text-slate-400 text-sm">20/5/24</p>
        </header>
        <footer className="flex items-center justify-between leading-none p-2 md:p-4">
          <a
            className="flex items-center no-underline hover:underline text-slate-300"
            href=""
          >
     <img
  alt="Placeholder"
  className="block rounded-full object-cover w-12 h-12"
  src="https://images.unsplash.com/reserve/RONyPwknRQOO3ag4xf3R_Kinsey.jpg?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
/>
            <p className="ml-2 text-sm">Rachel Brown</p>
          </a>
     
  <Like/>
         
        </footer>
      </article>
  
    </div>
    <div className="my-1 hvr-bob px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
      {/* Article */}
      <article className="overflow-hidden rounded-lg shadow-lg">
        <a href="">
          <img
            alt="Placeholder"
            className="block h-auto w-full"
            src="https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </a>
        <header className="flex items-center justify-between leading-tight p-2 md:p-4">
          <h1 className="text-lg">
            <a className="no-underline hover:underline text-slate-100" href="">
            The Rise of Video Content
            </a>
          </h1>
          <p className="text-slate-400 text-sm">22/5/24</p>
        </header>
        <footer className="flex items-center justify-between leading-none p-2 md:p-4">
          <a
            className="flex items-center no-underline hover:underline text-slate-300"
            href=""
          >
      <img
  alt="Placeholder"
  className="block rounded-full object-cover w-12 h-12"
  src="https://plus.unsplash.com/premium_photo-1663957892911-9355737653fc?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
/>
            <p className="ml-2 text-sm">Michael Chen</p>
          </a>
    
  <Like/>
       
        </footer>
      </article>
  
    </div>
    <div className="my-1 hvr-bob px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
      {/* Article */}
      <article className="overflow-hidden rounded-lg shadow-lg">
        <a href="">
          <img
            alt="Placeholder"
            className="block h-auto w-full"
            src="https://images.unsplash.com/photo-1558522195-e1201b090344?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </a>
        <header className="flex items-center justify-between leading-tight p-2 md:p-4">
          <h1 className="text-lg">
            <a className="no-underline hover:underline text-slate-100" href="">
            Maximizing Influencer Partnerships
            </a>
          </h1>
          <p className="text-slate-400 text-sm">23/5/24</p>
        </header>
        <footer className="flex items-center justify-between leading-none p-2 md:p-4">
          <a
            className="flex items-center no-underline hover:underline text-slate-300"
            href=""
          >
            <img
  alt="Placeholder"
  className="block rounded-full object-cover w-12 h-12"
  src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
/>
            <p className="ml-2 text-sm">Sarah Thompson</p>
          </a>
     
  <Like/>
         
        </footer>
      </article>
  
    </div>
    <div className="my-1 hvr-bob px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
      {/* Article */}
      <article className="overflow-hidden rounded-lg shadow-lg">
        <a href="">
          <img
            alt="Placeholder"
            className="block h-auto w-full"
            src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </a>
        <header className="flex items-center justify-between leading-tight p-2 md:p-4">
          <h1 className="text-lg">
            <a className="no-underline hover:underline text-slate-100" href="">
            Building Community Online
            </a>
          </h1>
          <p className="text-slate-400 text-sm">25/5/24</p>
        </header>
        <footer className="flex items-center justify-between leading-none p-2 md:p-4">
          <a
            className="flex items-center no-underline hover:underline text-slate-300"
            href=""
          >
              <img
  alt="Placeholder"
  className="block rounded-full object-cover w-12 h-12"
  src="https://images.unsplash.com/photo-1601935111781-c9083ad09928?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
/>
            <p className="ml-2 text-sm">David Rodriguez</p>
          </a>
      
  <Like/>
        
        </footer>
      </article>
  
    </div>
    <div className="my-1 hvr-bob px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
      {/* Article */}
      <article className="overflow-hidden rounded-lg shadow-lg">
        <a href="">
          <img
            alt="Placeholder"
            className="block h-auto w-full"
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </a>
        <header className="flex items-center justify-between leading-tight p-2 md:p-4">
          <h1 className="text-lg">
            <a className="no-underline hover:underline text-slate-100" href="">
            Mastering Social Media Analytics
            </a>
          </h1>
          <p className="text-slate-400 text-sm">27/5/24</p>
        </header>
        <footer className="flex items-center justify-between leading-none p-2 md:p-4">
          <a
            className="flex items-center no-underline hover:underline text-slate-300"
            href=""
          >
            <img
  alt="Placeholder"
  className="block rounded-full object-cover w-12 h-12"
  src="https://images.unsplash.com/photo-1491233670471-398d873b5406?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
/>
            <p className="ml-2 text-sm">Olivia Walker</p>
          </a>
      
  <Like/>
       
        </footer>
      </article>
  
    </div>
    <div className="my-1 hvr-bob px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
      {/* Article */}
      <article className="overflow-hidden rounded-lg shadow-lg">
        <a href="">
          <img
            alt="Placeholder"
            className="block h-auto w-full"
            src="https://images.unsplash.com/photo-1519791883288-dc8bd696e667?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </a>
        <header className="flex items-center justify-between leading-tight p-2 md:p-4">
          <h1 className="text-lg">
            <a className="no-underline hover:underline text-slate-100" href="">
            The Art of Storytelling in Social Media
            </a>
          </h1>
          <p className="text-slate-400 text-sm">29/5/24</p>
        </header>
        <footer className="flex items-center justify-between leading-none p-2 md:p-4">
          <a
            className="flex items-center no-underline hover:underline text-slate-300"
            href=""
          >
                    <img
  alt="Placeholder"
  className="block rounded-full object-cover w-12 h-12"
  src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
/>
            <p className="ml-2 text-sm">Ethan Campbell</p>
          </a>
     
  <Like/>
       
        </footer>
      </article>
  
    </div>
    <div className="my-1 hvr-bob px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
      {/* Article */}
      <article className="overflow-hidden rounded-lg shadow-lg">
        <a href="">
          <img
            alt="Placeholder"
            className="block h-auto w-full"
            src="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </a>
        <header className="flex items-center justify-between leading-tight p-2 md:p-4">
          <h1 className="text-lg">
            <a className="no-underline hover:underline text-slate-100" href="">
            Engaging Your Audience with Interactive Content
            </a>
          </h1>
          <p className="text-slate-400 text-sm">30/5/24</p>
        </header>
        <footer className="flex items-center justify-between leading-none p-2 md:p-4">
          <a
            className="flex items-center no-underline hover:underline text-slate-300"
            href=""
          >
                     <img
  alt="Placeholder"
  className="block rounded-full object-cover w-12 h-12"
  src="https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
/>
            <p className="ml-2 text-sm">Mark Henry</p>
          </a>
       
  <Like/>
      
        </footer>
      </article>
  
    </div>


    {/* END Column */}
  </div>
</div>

</div>

  )
}

export default Explore