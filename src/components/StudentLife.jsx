import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./style.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const StudentLife = ({ img12, img17 , img24}) => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <div
        data-aos="fade-up-right"
        className="flex  w-[98%] m-auto border mt-[50px] justify-center items-center gap-[60px] p-[100px_30px] rounded-[20px] shadow-[5px_10px_black] "
      >
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

      <div className="text-center mt-[100px] ">
        <button className="border p-[10px_20px] rounded-[10px] shadow-[0px_0px_10px_gray]">
          Our Features
        </button>{" "}
        <br /> <br />
        <h1 className="text-[40px]">Extracurricular Activities</h1> <br />
        <p>
          At Little Learners Academy, we believe in nurturing well-rounded
          individuals. Our extracurricular activities offer <br />
          a diverse range of experiences that complement our academic curriculum
          and encourage students to explore <br />
          their interests and passions. We offer a wide array of extracurricular
          activities, including
        </p>{" "}
        <br />
        <br />
        <br />
        

        <div className="flex gap-[20px] justify-between items-center  overflow-x-auto whitespace-normal   w-[90%] m-auto h-[100vh]   ">

          <div className="flex flex-col justify-around items-center h-[100%]">

           <div className="min-w-[300px] h-[250px]  text-start border border-black rounded-2xl shadow-[5px_10px_black] p-[20px] ">
          <img className=" mt-[-50px] w-[70px] " src={img24} alt="" />
          <h2 className="text-[18px] font-bold ">Outstanding Early Childhood <br /> Education Awar</h2> <br />
          <p className="text-[12px]">Presented by the National Association for the <br />
            Education of Young Children (NAEYC) in <br />
            recognition of Little Learners Academy's <br />
            commitment to delivering exceptional early <br />
            childhood education and fostering a nurturing <br />
            learning environment.</p>
           </div>

            <div className="min-w-[300px] h-[250px]   text-start border border-black rounded-2xl shadow-[5px_10px_black] p-[20px] ">
          <img className=" mt-[-50px] w-[70px] " src={img24} alt="" />
          <h2 className="text-[18px] font-bold ">Outstanding Early Childhood <br /> Education Awar</h2> <br />
          <p className="text-[12px]">Presented by the National Association for the <br />
            Education of Young Children (NAEYC) in <br />
            recognition of Little Learners Academy's <br />
            commitment to delivering exceptional early <br />
            childhood education and fostering a nurturing <br />
            learning environment.</p>
            </div>
            
          </div>
          
           <div className="flex flex-col justify-around items-center h-[100%]" >

           <div className="min-w-[300px] h-[250px]  text-start border border-black rounded-2xl shadow-[5px_10px_black] p-[20px] ">
          <img className=" mt-[-50px] w-[70px] " src={img24} alt="" />
          <h2 className="text-[18px] font-bold ">Outstanding Early Childhood <br /> Education Awar</h2> <br />
          <p className="text-[12px]">Presented by the National Association for the <br />
            Education of Young Children (NAEYC) in <br />
            recognition of Little Learners Academy's <br />
            commitment to delivering exceptional early <br />
            childhood education and fostering a nurturing <br />
            learning environment.</p>
           </div>

            <div className="min-w-[300px] h-2500px] text-start border border-black rounded-2xl shadow-[5px_10px_black] p-[20px] ">
          <img className=" mt-[-50px] w-[70px] " src={img24} alt="" />
          <h2 className="text-[18px] font-bold ">Outstanding Early Childhood <br /> Education Awar</h2> <br />
          <p className="text-[12px]">Presented by the National Association for the <br />
            Education of Young Children (NAEYC) in <br />
            recognition of Little Learners Academy's <br />
            commitment to delivering exceptional early <br />
            childhood education and fostering a nurturing <br />
            learning environment.</p>
            </div>
            
          </div>


           <div className="flex flex-col justify-around items-center h-[100%]">

           <div className="min-w-[300px] h-[250px]  text-start border border-black rounded-2xl shadow-[5px_10px_black] p-[20px] ">
          <img className=" mt-[-50px] w-[70px] " src={img24} alt="" />
          <h2 className="text-[18px] font-bold ">Outstanding Early Childhood <br /> Education Awar</h2> <br />
          <p className="text-[12px]">Presented by the National Association for the <br />
            Education of Young Children (NAEYC) in <br />
            recognition of Little Learners Academy's <br />
            commitment to delivering exceptional early <br />
            childhood education and fostering a nurturing <br />
            learning environment.</p>
           </div>

            <div className="min-w-[300px] h-2500px] text-start border border-black rounded-2xl shadow-[5px_10px_black] p-[20px] ">
          <img className=" mt-[-50px] w-[70px] " src={img24} alt="" />
          <h2 className="text-[18px] font-bold ">Outstanding Early Childhood <br /> Education Awar</h2> <br />
          <p className="text-[12px]">Presented by the National Association for the <br />
            Education of Young Children (NAEYC) in <br />
            recognition of Little Learners Academy's <br />
            commitment to delivering exceptional early <br />
            childhood education and fostering a nurturing <br />
            learning environment.</p>
            </div>
            
          </div>


           <div className="flex flex-col justify-around items-center h-[100%]">

           <div className="min-w-[300px] h-[250px]  text-start border border-black rounded-2xl shadow-[5px_10px_black] p-[20px] ">
          <img className=" mt-[-50px] w-[70px] " src={img24} alt="" />
          <h2 className="text-[18px] font-bold ">Outstanding Early Childhood <br /> Education Awar</h2> <br />
          <p className="text-[12px]">Presented by the National Association for the <br />
            Education of Young Children (NAEYC) in <br />
            recognition of Little Learners Academy's <br />
            commitment to delivering exceptional early <br />
            childhood education and fostering a nurturing <br />
            learning environment.</p>
           </div>

            <div className="min-w-[300px] h-2500px] text-start border border-black rounded-2xl shadow-[5px_10px_black] p-[20px] ">
          <img className=" mt-[-50px] w-[70px] " src={img24} alt="" />
          <h2 className="text-[18px] font-bold ">Outstanding Early Childhood <br /> Education Awar</h2> <br />
          <p className="text-[12px]">Presented by the National Association for the <br />
            Education of Young Children (NAEYC) in <br />
            recognition of Little Learners Academy's <br />
            commitment to delivering exceptional early <br />
            childhood education and fostering a nurturing <br />
            learning environment.</p>
            </div>
            
          </div>


           <div className="flex flex-col justify-around items-center h-[100%]">

           <div className="min-w-[300px] h-[250px]  text-start border border-black rounded-2xl shadow-[5px_10px_black] p-[20px] ">
          <img className=" mt-[-50px] w-[70px] " src={img24} alt="" />
          <h2 className="text-[18px] font-bold ">Outstanding Early Childhood <br /> Education Awar</h2> <br />
          <p className="text-[12px]">Presented by the National Association for the <br />
            Education of Young Children (NAEYC) in <br />
            recognition of Little Learners Academy's <br />
            commitment to delivering exceptional early <br />
            childhood education and fostering a nurturing <br />
            learning environment.</p>
           </div>

            <div className="min-w-[300px] h-2500px] text-start border border-black rounded-2xl shadow-[5px_10px_black] p-[20px] ">
          <img className=" mt-[-50px] w-[70px] " src={img24} alt="" />
          <h2 className="text-[18px] font-bold ">Outstanding Early Childhood <br /> Education Awar</h2> <br />
          <p className="text-[12px]">Presented by the National Association for the <br />
            Education of Young Children (NAEYC) in <br />
            recognition of Little Learners Academy's <br />
            commitment to delivering exceptional early <br />
            childhood education and fostering a nurturing <br />
            learning environment.</p>
            </div>
            
          </div>

           <div className="flex flex-col justify-around items-center h-[100%]">

           <div className="min-w-[300px] h-[250px]  text-start border border-black rounded-2xl shadow-[5px_10px_black] p-[20px] ">
          <img className=" mt-[-50px] w-[70px] " src={img24} alt="" />
          <h2 className="text-[18px] font-bold ">Outstanding Early Childhood <br /> Education Awar</h2> <br />
          <p className="text-[12px]">Presented by the National Association for the <br />
            Education of Young Children (NAEYC) in <br />
            recognition of Little Learners Academy's <br />
            commitment to delivering exceptional early <br />
            childhood education and fostering a nurturing <br />
            learning environment.</p>
           </div>

            <div className="min-w-[300px] h-2500px] text-start border border-black rounded-2xl shadow-[5px_10px_black] p-[20px] ">
          <img className=" mt-[-50px] w-[70px] " src={img24} alt="" />
          <h2 className="text-[18px] font-bold ">Outstanding Early Childhood <br /> Education Awar</h2> <br />
          <p className="text-[12px]">Presented by the National Association for the <br />
            Education of Young Children (NAEYC) in <br />
            recognition of Little Learners Academy's <br />
            commitment to delivering exceptional early <br />
            childhood education and fostering a nurturing <br />
            learning environment.</p>
            </div>
            
          </div>


           <div className="flex flex-col justify-around items-center h-[100%]">

           <div className="min-w-[300px] h-[250px]  text-start border border-black rounded-2xl shadow-[5px_10px_black] p-[20px] ">
          <img className=" mt-[-50px] w-[70px] " src={img24} alt="" />
          <h2 className="text-[18px] font-bold ">Outstanding Early Childhood <br /> Education Awar</h2> <br />
          <p className="text-[12px]">Presented by the National Association for the <br />
            Education of Young Children (NAEYC) in <br />
            recognition of Little Learners Academy's <br />
            commitment to delivering exceptional early <br />
            childhood education and fostering a nurturing <br />
            learning environment.</p>
           </div>

            <div className="min-w-[300px] h-2500px] text-start border border-black rounded-2xl shadow-[5px_10px_black] p-[20px] ">
          <img className=" mt-[-50px] w-[70px] " src={img24} alt="" />
          <h2 className="text-[18px] font-bold ">Outstanding Early Childhood <br /> Education Awar</h2> <br />
          <p className="text-[12px]">Presented by the National Association for the <br />
            Education of Young Children (NAEYC) in <br />
            recognition of Little Learners Academy's <br />
            commitment to delivering exceptional early <br />
            childhood education and fostering a nurturing <br />
            learning environment.</p>
            </div>
            
          </div>

           <div className="flex flex-col justify-around items-center h-[100%]">

           <div className="min-w-[300px] h-[250px]  text-start border border-black rounded-2xl shadow-[5px_10px_black] p-[20px] ">
          <img className=" mt-[-50px] w-[70px] " src={img24} alt="" />
          <h2 className="text-[18px] font-bold ">Outstanding Early Childhood <br /> Education Awar</h2> <br />
          <p className="text-[12px]">Presented by the National Association for the <br />
            Education of Young Children (NAEYC) in <br />
            recognition of Little Learners Academy's <br />
            commitment to delivering exceptional early <br />
            childhood education and fostering a nurturing <br />
            learning environment.</p>
           </div>

            <div className="min-w-[300px] h-2500px] text-start border border-black rounded-2xl shadow-[5px_10px_black] p-[20px] ">
          <img className=" mt-[-50px] w-[70px] " src={img24} alt="" />
          <h2 className="text-[18px] font-bold ">Outstanding Early Childhood <br /> Education Awar</h2> <br />
          <p className="text-[12px]">Presented by the National Association for the <br />
            Education of Young Children (NAEYC) in <br />
            recognition of Little Learners Academy's <br />
            commitment to delivering exceptional early <br />
            childhood education and fostering a nurturing <br />
            learning environment.</p>
            </div>
            
          </div>

           <div className="flex flex-col justify-around items-center h-[100%]">

           <div className="min-w-[300px] h-[250px]  text-start border border-black rounded-2xl shadow-[5px_10px_black] p-[20px] ">
          <img className=" mt-[-50px] w-[70px] " src={img24} alt="" />
          <h2 className="text-[18px] font-bold ">Outstanding Early Childhood <br /> Education Awar</h2> <br />
          <p className="text-[12px]">Presented by the National Association for the <br />
            Education of Young Children (NAEYC) in <br />
            recognition of Little Learners Academy's <br />
            commitment to delivering exceptional early <br />
            childhood education and fostering a nurturing <br />
            learning environment.</p>
           </div>

            <div className="min-w-[300px] h-2500px] text-start border border-black rounded-2xl shadow-[5px_10px_black] p-[20px] ">
          <img className=" mt-[-50px] w-[70px] " src={img24} alt="" />
          <h2 className="text-[18px] font-bold ">Outstanding Early Childhood <br /> Education Awar</h2> <br />
          <p className="text-[12px]">Presented by the National Association for the <br />
            Education of Young Children (NAEYC) in <br />
            recognition of Little Learners Academy's <br />
            commitment to delivering exceptional early <br />
            childhood education and fostering a nurturing <br />
            learning environment.</p>
            </div>
            
          </div>

         

        </div>
      </div>

      <div className="text-center mt-[100px] ">
        <button className="border p-[10px_20px] rounded-[10px] shadow-[0px_0px_10px_gray]">
          Our Features
        </button>{" "}
        <br /> <br />
        <h1 className="text-[40px]">Events & Celebrations</h1> <br />
        <p>
          At Little Learners Academy, we celebrate every milestone and create
          cherished memories for our students. <br />
          Throughout the year, we host a variety of events and celebrations that
          bring the entire school community <br />
          together. Some of our memorable events include
        </p>{" "}
        <br />
        <br />
        <br />
        <div className="flex flex-wrap justify-center items-center gap-[30px] p-[100px] ">
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="center-center"
            className="border border-black rounded-2xl w-[300px] p-[20px] shadow-[5px_10px_black] "
          >
            <img src={img17} alt="" />
            <h1 className="text-2xl">Language Arts</h1> <br />
            <p>
              Reading, writing, storytelling, and <br /> communication skills.
            </p>
          </div>

          <div
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="500"
            className="border border-black rounded-2xl w-[300px] p-[20px] shadow-[5px_10px_black] "
          >
            <img src={img17} alt="" />
            <h1 className="text-2xl">Language Arts</h1> <br />
            <p>
              Reading, writing, storytelling, and <br /> communication skills.
            </p>
          </div>

          <div
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine "
            className="border border-black rounded-2xl w-[300px] p-[20px] shadow-[5px_10px_black] "
          >
            <img src={img17} alt="" />
            <h1 className="text-2xl">Language Arts</h1> <br />
            <p>
              Reading, writing, storytelling, and <br /> communication skills.
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="border border-black rounded-2xl w-[300px] p-[20px] shadow-[5px_10px_black] "
          >
            <img src={img17} alt="" />
            <h1 className="text-2xl">Language Arts</h1> <br />
            <p>
              Reading, writing, storytelling, and <br /> communication skills.
            </p>
          </div>

          <div
            data-aos="zoom-out-right"
            className="border border-black rounded-2xl w-[300px] p-[20px] shadow-[5px_10px_black] "
          >
            <img src={img17} alt="" />
            <h1 className="text-2xl">Language Arts</h1> <br />
            <p>
              Reading, writing, storytelling, and <br /> communication skills.
            </p>
          </div>

          <div
            data-aos="zoom-out-down"
            className="border border-black rounded-2xl w-[300px] p-[20px] shadow-[5px_10px_black] "
          >
            <img src={img17} alt="" />
            <h1 className="text-2xl">Language Arts</h1> <br />
            <p>
              Reading, writing, storytelling, and <br /> communication skills.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center mt-[100px] ">
        <button className="border p-[10px_20px] rounded-[10px] shadow-[0px_0px_10px_gray]">
          Our Achievements
        </button>{" "}
        <br /> <br />
        <h1 className="text-[40px]">Student Support</h1> <br />
        <p>
          At Little Learners Academy, we are committed to providing a supportive
          and nurturing environment that meets the unique needs of <br />
          each student. Our student support services include
        </p>{" "}
        <br />
        <br />
        <br />
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className=" border  border-black p-[40px_20px] rounded-2xl w-[400px] text-start shadow-[5px_10px_black] ">
              <h2 className="text-3xl">Counseling</h2> <br />
              <p>
                Professional counselors offer guidance and <br />
                support to students, addressing their <br />
                emotional and social well-being.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" border  border-black p-[40px_20px] rounded-2xl w-[400px] text-start shadow-[5px_10px_black] ">
              <h2 className="text-3xl">Counseling</h2> <br />
              <p>
                Professional counselors offer guidance and <br />
                support to students, addressing their <br />
                emotional and social well-being.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" border  border-black p-[40px_20px] rounded-2xl w-[400px] text-start shadow-[5px_10px_black] ">
              <h2 className="text-3xl">Counseling</h2> <br />
              <p>
                Professional counselors offer guidance and <br />
                support to students, addressing their <br />
                emotional and social well-being.
              </p>
            </div>

          </SwiperSlide>
          <SwiperSlide>
            <div className=" border  border-black p-[40px_20px] rounded-2xl w-[400px] text-start shadow-[5px_10px_black] ">
              <h2 className="text-3xl">Counseling</h2> <br />
              <p>
                Professional counselors offer guidance and <br />
                support to students, addressing their <br />
                emotional and social well-being.
              </p>
            </div>

          </SwiperSlide>
          <SwiperSlide>
            <div className=" border  border-black p-[40px_20px] rounded-2xl w-[400px] text-start shadow-[5px_10px_black] ">
              <h2 className="text-3xl">Counseling</h2> <br />
              <p>
                Professional counselors offer guidance and <br />
                support to students, addressing their <br />
                emotional and social well-being.
              </p>
            </div>

          </SwiperSlide>
          <SwiperSlide>
            <div className=" border  border-black p-[40px_20px] rounded-2xl w-[400px] text-start shadow-[5px_10px_black] ">
              <h2 className="text-3xl">Counseling</h2> <br />
              <p>
                Professional counselors offer guidance and <br />
                support to students, addressing their <br />
                emotional and social well-being.
              </p>
            </div>

          </SwiperSlide>
          <SwiperSlide>
            <div className=" border  border-black p-[40px_20px] rounded-2xl w-[400px] text-start shadow-[5px_10px_black] ">
              <h2 className="text-3xl">Counseling</h2> <br />
              <p>
                Professional counselors offer guidance and <br />
                support to students, addressing their <br />
                emotional and social well-being.
              </p>
            </div>

          </SwiperSlide>
          <SwiperSlide>

            <div className=" border  border-black p-[40px_20px] rounded-2xl w-[400px] text-start shadow-[5px_10px_black] ">
              <h2 className="text-3xl">Counseling</h2> <br />
              <p>
                Professional counselors offer guidance and <br />
                support to students, addressing their <br />
                emotional and social well-being.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>

          </SwiperSlide>
          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>
      </div>
    </>
  );
};

export default StudentLife;
