import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = ({ img1, img7, img8 , img9 , img10 , img11}) => {
    return (
        <>
            <img className="w-[99%] h-[80px] pb-[20px]  m-auto " src={img1} alt="" />
            <div className="flex m-auto ml-[5px] ">
                <button className="border bg-[#FF8D4D] p-[0px_20px] ">Little Learhers</button>
                <div className="w-[400px] border "></div>
          <ul className="flex gap-[30px] border   ">
              <li className=" text-[17px] p-[20px]">
                  <Link to={"/"}>Home</Link>
              </li>
              <li className="border-l text-[15px] p-[20px]">
                  <Link to={"/aboutus"}>About Us</Link>
              </li>
              <li className="border-l text-[15px] p-[20px]">
                  <Link to={"/academics"}>Academics</Link>
              </li>
              <li className="border-l text-[15px] p-[20px]">
                  <Link to={"/admissions"}>Admissions</Link>
              </li>
              <li className="border-l text-[15px] p-[20px]">
                  <Link to={"/studentLife"}>Student Life</Link>
                    </li>
                    <button className="bg-[#FFAE80] p-[10px_20px] border-l ">Contact</button>
          </ul>
            </div>
             <Outlet/>
            <footer data-aos="zoom-in-up">

       <div className='p-[50px] rounded-xl shadow-xl mt-[100px] border'>
                <div data-aos="zoom-in-up" className='flex justify-between'>
                    <div className='w-[34%]'>
                        <img src={img7} alt="" className='w-[150px]' />
                        <h1 className='mt-[20px] '> We believe in the power of play to foster creativity, problem-solving skills, and imagination. </h1>
                       <div className='flex items-center justify-start gap-[20px] mt-[20px]'>
                        <img src={img9} alt="" className='' />
                         <span>hello@littlelearners.com</span> 
                       </div>
                        
                        <div className='flex items-center justify-start gap-[20px] mt-[20px]'>
                        <img src={img10} alt="" className='' />
                        <span>+91 91813 23 2309</span> 
                        </div>
                         
                        <div  className='flex items-center justify-start gap-[20px] mt-[20px]'>
                        <img src={img11} alt="" className='mt-[14px]' />
                        <span>Somewhere in the World</span>
                        </div>
                    </div>
                    <div className='w-[13%]'>
                        <h1 className=''>Home</h1>
                        <h1 className='mt-[25px]'>Features</h1>
                        <h1 className='mt-[25px]'>Our Testimonials</h1>
                        <h1 className='mt-[25px]'>FAQ</h1>
                    </div>
                    <div className='w-[18%]'>
                        <h1 className=''>About Us</h1>
                        <h1 className='mt-[25px]'>Our Mission</h1>
                        <h1 className='mt-[25px]'>Our and Ьышвыф</h1>
                        <h1 className='mt-[25px]'>FAQ</h1>
                        <h1 className='mt-[25px]'>History</h1>
                    </div>
                    <div className='w-[13%]'>
                        <h1 className=''>Home</h1>
                        <h1 className='mt-[25px]'>Features</h1>
                        <h1 className='mt-[25px]'>FAQ</h1>
                    </div>
                    <div className='w-[13%]'>
                        <h1 className=''>Home</h1>
                        <h1 className='mt-[25px]'>Features</h1>
                        <h1 className='mt-[25px]'>FAQ</h1>
                    </div>
                </div>
                <hr className='mt-[30px] mb-[20px]' />
                <div className='flex items-center justify-between'>
                    <div className='w-[35%] flex items-center gap-[20px]'>
                        <h1>Terms of Service</h1>
                        <h1>Terms of Service</h1>
                        <h1>Terms of Service</h1>
                    </div>
                    <img src={img8} alt="" className='w-[120px]' />
                </div>
                <hr className='mt-[30px] mb-[20px]' />
                <h1 className='text-center'> Copyright © [2023] Little Learners Academy. All rights reserved. </h1>
            </div>
      </footer>
      </>
  );
};

export default Layout;
