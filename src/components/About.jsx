import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import "./style.css";

// import required modules
import { Pagination } from 'swiper/modules';

const About = ({ img12, img13, img15 , img9 , img24 }) => {
  
  let api = "https://68500abee7c42cfd17971bfc.mockapi.io/data/data"

  const [ data , setData] = useState([])
  
  async function Get() {
    try {
      const { data } = await axios.get(api)
      setData(data)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    Get()
   } , [])
  

  return (
    <>
      <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className="flex w-[98%] m-auto border mt-[50px] justify-center items-center gap-[60px] p-[100px_30px] rounded-[20px] shadow-[5px_10px_black] ">
        <img
          className="absolute top-[10px] left-[10px] w-[150px]"
          src={img12}
          alt=""
        />
        <div className="">
          <button className="p-[5px_20px] border rounded-[5px] ">
            Overview
          </button>{" "}
          <br />
          <h1 className="text-[35px]">
            Welcome to Little Learners <br />
            Academy
          </h1>
        </div>

        <p className="text-[15px]">
          A leading kinder garden school dedicated to providing a nurturing and
          stimulating <br />
          environment for young learners. With a commitment to excellence in
          early education, <br />
          we believe in shaping curious minds and building a strong foundation
          for a lifelong love <br />
          of learning. Our holistic approach fosters intellectual, social,
          emotional, and physical <br />
          development, ensuring that each child reaches their full potential.
        </p>
      </div>

      <div data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500"
        className="text-center p-[150px_0px]">
        <button className="border rounded-[5px] p-[5px_15px]  ">
          Mission & Visions
        </button>{" "}
        <br /> <br />
        <h1 className="text-[30px]"> Our Mission & Visions</h1> <br />
        <p>
          We are here to provide a nurturing and inclusive environment where
          young minds can thrive, fostering a love for learning and personal{" "}
          <br />
          growth.
        </p>{" "}
        <br />
        <br />
        <br />
        <img className="w-[1000px] m-auto " src={img13} alt="" />
      </div>

      <div data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500"
        className="text-center p-[150px_0px]">
        <button className="border rounded-[5px] p-[5px_15px]  ">
          Our Achievements
        </button>{" "}
        <br /> <br />
        <h1 className="text-[30px]"> Our Awards and Recognitions</h1> <br />
        <p>
          Little Learners Academy takes pride in our commitment to delivering
          high-quality education and outstanding student experiences. We <br />
          are honored to have received various awards and recognitions for our
          dedication to early childhood education. These accolades reflect{" "}
          <br />
          our team's relentless efforts in creating an exceptional learning
          environment for our students..
        </p>{" "}
        <br />
        <br />
        <br />
    
        <div className="flex gap-[20px] justify-between items-center  overflow-x-auto whitespace-normal  w-[80%] m-auto h-[400px]   ">

          
        <div className="min-w-[350px] text-start border border-black rounded-2xl shadow-[5px_10px_black] p-[20px] ">
          <img className="relative top-[-50px] w-[70px] " src={img24} alt="" />
          <h2 className="text-xl font-bold ">Outstanding Early Childhood <br /> Education Awar</h2> <br />
          <p className="text-[15px]">Presented by the National Association for the <br />
            Education of Young Children (NAEYC) in <br />
            recognition of Little Learners Academy's <br />
            commitment to delivering exceptional early <br />
            childhood education and fostering a nurturing <br />
            learning environment.</p>
          </div>

          <div className="min-w-[350px] text-start border border-black rounded-2xl shadow-[5px_10px_black] p-[20px] ">
          <img className="relative top-[-50px] w-[70px] " src={img24} alt="" />
          <h2 className="text-xl font-bold ">Outstanding Early Childhood <br /> Education Awar</h2> <br />
          <p className="text-[15px]">Presented by the National Association for the <br />
            Education of Young Children (NAEYC) in <br />
            recognition of Little Learners Academy's <br />
            commitment to delivering exceptional early <br />
            childhood education and fostering a nurturing <br />
            learning environment.</p>
          </div>

          <div className="min-w-[350px] text-start border border-black rounded-2xl shadow-[5px_10px_black] p-[20px] ">
          <img className="relative top-[-50px] w-[70px] " src={img24} alt="" />
          <h2 className="text-xl font-bold ">Outstanding Early Childhood <br /> Education Awar</h2> <br />
          <p className="text-[15px]">Presented by the National Association for the <br />
            Education of Young Children (NAEYC) in <br />
            recognition of Little Learners Academy's <br />
            commitment to delivering exceptional early <br />
            childhood education and fostering a nurturing <br />
            learning environment.</p>
          </div>

          <div className="min-w-[350px] text-start border border-black rounded-2xl shadow-[5px_10px_black] p-[20px] ">
          <img className="relative top-[-50px] w-[70px] " src={img24} alt="" />
          <h2 className="text-xl font-bold ">Outstanding Early Childhood <br /> Education Awar</h2> <br />
          <p className="text-[15px]">Presented by the National Association for the <br />
            Education of Young Children (NAEYC) in <br />
            recognition of Little Learners Academy's <br />
            commitment to delivering exceptional early <br />
            childhood education and fostering a nurturing <br />
            learning environment.</p>
          </div>

          <div className="min-w-[350px] text-start border border-black rounded-2xl shadow-[5px_10px_black] p-[20px] ">
          <img className="relative top-[-50px] w-[70px] " src={img24} alt="" />
          <h2 className="text-xl font-bold ">Outstanding Early Childhood <br /> Education Awar</h2> <br />
          <p className="text-[15px]">Presented by the National Association for the <br />
            Education of Young Children (NAEYC) in <br />
            recognition of Little Learners Academy's <br />
            commitment to delivering exceptional early <br />
            childhood education and fostering a nurturing <br />
            learning environment.</p>
          </div>

          <div className="min-w-[350px] text-start border border-black rounded-2xl shadow-[5px_10px_black] p-[20px] ">
          <img className="relative top-[-50px] w-[70px] " src={img24} alt="" />
          <h2 className="text-xl font-bold ">Outstanding Early Childhood <br /> Education Awar</h2> <br />
          <p className="text-[15px]">Presented by the National Association for the <br />
            Education of Young Children (NAEYC) in <br />
            recognition of Little Learners Academy's <br />
            commitment to delivering exceptional early <br />
            childhood education and fostering a nurturing <br />
            learning environment.</p>
          </div>

          <div className="min-w-[350px] text-start border border-black rounded-2xl shadow-[5px_10px_black] p-[20px] ">
          <img className="relative top-[-50px] w-[70px] " src={img24} alt="" />
          <h2 className="text-xl font-bold ">Outstanding Early Childhood <br /> Education Awar</h2> <br />
          <p className="text-[15px]">Presented by the National Association for the <br />
            Education of Young Children (NAEYC) in <br />
            recognition of Little Learners Academy's <br />
            commitment to delivering exceptional early <br />
            childhood education and fostering a nurturing <br />
            learning environment.</p>
          </div>

        </div>

      </div>

      <div className="text-center p-[150px_0px]">
        <button className="border rounded-[5px] p-[5px_15px]  ">
          Our Progressive Journey
        </button>{" "}
        <br /> <br />
        <h1 className="text-[30px]"> Our History</h1> <br />
        <p>
          Little Learners Academy takes pride in our commitment to delivering
          high-quality education and outstanding student experiences. We <br />
          are honored to have received various awards and recognitions for our
          dedication to early childhood education. These accolades reflect{" "}
          <br />
          our team's relentless efforts in creating an exceptional learning
          environment for our students..
        </p>{" "}
        <br />
        <br />
        <br />
        <img className="w-[1000px] m-auto " src={img15} alt="" />
      </div>
     
      
      <div className="text-center p-[150px_0px]">
        <button className="border rounded-[5px] p-[5px_15px]  ">
          Our Teachers With Experties
        </button>{" "}
        <br /> <br />
        <h1 className="text-[30px]"> Our Team Members </h1> <br />
        <p>
          Little Learners Academy takes pride in our commitment to delivering
          high-quality education and outstanding student experiences. We <br />
          are honored to have received various awards and recognitions for our
          dedication to early childhood education. These accolades reflect{" "}
          <br />
          our team's relentless efforts in creating an exceptional learning
          environment for our students..
        </p>{" "}
        <br />
        <br />
        <br />


        <div 
        
          className="flex flex-wrap justify-center items-center gap-[20px]">
          {
            data.map((el) => {
              return (
                <Link to={`/user/${el.id}`} >
                   <div data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="500"
                  key={el.id} className=" border border-[2px_solid_black] shadow-[5px_10px_black] rounded-2xl p-[30px] h-[350px] " >
                  <div className="flex justify-between items-center">

                  <h1 className="flex items-center gap-[15px]">
                   <img className="w-[50px] border rounded-[5px] border-[2px_solid_black]  " src={el.image} alt="" />
                    {el.name} 
                    
                  </h1>
                  
                  <img src={img9} alt="" />
                  </div>

                  <div className=" border border-black bg-[#FFF5F0] mt-[40px] p-[40px_10px] text-start ">

                  <h3>Qualification: Master's Degree in Elementary Education</h3>
                  <br />
                  <p>With a strong background in elementary education, Mr. David brings <br />
                    a creative and interactive teaching style to his classroom. His <br />
                    enthusiasm for learning inspires students to ask questions and think critically.</p>
                  </div>
                 </div>
                </Link>
             )
            })
          }

        </div>
          <Outlet/>  
      </div>
    </>
  );
};

export default About;
