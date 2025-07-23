import React, { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper React components

import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

import "./style.css";

// import required modules
import { Grid } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import "./style.css";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import "../components/style.css";

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Home = ({ img2, img5, img6,img23 , img24 }) => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
    <div  data-aos="zoom-in" className='flex justify-around items-center p-[100px_0px] '>
      <img className='w-[500px] ' src={img2} alt="" />
      <div>
        <h2>Welcome to Little Learners Academy</h2> <br />
        <h1 className='text-[50px] font-bolt '>Where Young Minds Blossom <br />
          and <span className='text-[#7c5307]'>Dreams Take Flight.</span> </h1> <br />
        <p>Our kinder garden school provides a nurturing and stimulating environment, fostering <br />
          a love for learning that lasts a lifetime. Join us as we embark on an exciting <br />
          educational journey together!</p> <br /><br />
        <div className='flex justify-around text-center p-[20px] w-[90%] border rounded-[10px] shadow-[5px_10px_black] '>

          <div>
            <h1 className='font-bolt text-[30px]'>+7000</h1>
            <p>Students Passed Out</p>
          </div>
          <div>
            <h1 className='font-bolt text-[30px]'>+37</h1>
            <p>Students Passed Out</p>
          </div>
          <div>
            <h1 className='font-bolt text-[30px]'>+15</h1>
            <p>Students Passed Out</p>
          </div>
          

        </div>
      </div>
      </div>
      
      <div  data-aos="zoom-in" className='text-center'>
        <button className='border p-[10px_20px] rounded-[10px] shadow-[0px_0px_10px_gray]'>Children Deserve Bright Future</button> <br /> <br />
        <h1 className='text-[40px]'>Our Benefits</h1> <br />
        <p>With a dedicated team of experienced educators, state-of-the-art facilities, and a comprehensive curriculum, <br />
          we aim to lay a strong foundation for your child's future.</p> <br /><br /><br />
        
        <div className='text-start'>

          
          <div className='grid grid-cols-3 grid-rows-2 gap-[40px] '>
            
          <div className=' border border-black rounded-2xl w-[400px] h-[300px] shadow-[5px_10px_black] p-[20px] '>
            <img className='mt-[-50px]   ' src={img24} alt="" /> <br /><br />
            <h2 className='text-2xl'>Holistic Learning Approach</h2> <br />
            <p>Our curriculum focuses on nurturing  <br />cognitive, social, emotional, and physical <br /> development, ensuring a well-rounded <br /> education.</p>

            </div>
            
             <div className=' border border-black rounded-2xl w-[400px] h-[300px] shadow-[5px_10px_black] p-[20px] '>
            <img className='mt-[-50px]   ' src={img24} alt="" /> <br /><br />
            <h2 className='text-2xl'>Holistic Learning Approach</h2> <br />
            <p>Our curriculum focuses on nurturing  <br />cognitive, social, emotional, and physical <br /> development, ensuring a well-rounded <br /> education.</p>

              </div> <div className=' border border-black rounded-2xl w-[400px] h-[300px] shadow-[5px_10px_black] p-[20px] '>
            <img className='mt-[-50px]   ' src={img24} alt="" /> <br /><br />
            <h2 className='text-2xl'>Holistic Learning Approach</h2> <br />
            <p>Our curriculum focuses on nurturing  <br />cognitive, social, emotional, and physical <br /> development, ensuring a well-rounded <br /> education.</p>

              </div> <div className=' border border-black rounded-2xl w-[400px] h-[300px] shadow-[5px_10px_black] p-[20px] '>
            <img className='mt-[-50px]   ' src={img24} alt="" /> <br /><br />
            <h2 className='text-2xl'>Holistic Learning Approach</h2> <br />
            <p>Our curriculum focuses on nurturing  <br />cognitive, social, emotional, and physical <br /> development, ensuring a well-rounded <br /> education.</p>

              </div> <div className=' border border-black rounded-2xl w-[400px] h-[300px] shadow-[5px_10px_black] p-[20px] '>
            <img className='mt-[-50px]   ' src={img24} alt="" /> <br /><br />
            <h2 className='text-2xl'>Holistic Learning Approach</h2> <br />
            <p>Our curriculum focuses on nurturing  <br />cognitive, social, emotional, and physical <br /> development, ensuring a well-rounded <br /> education.</p>

              </div> <div className=' border border-black rounded-2xl w-[400px] h-[300px] shadow-[5px_10px_black] p-[20px] '>
            <img className='mt-[-50px]   ' src={img24} alt="" /> <br /><br />
            <h2 className='text-2xl'>Holistic Learning Approach</h2> <br />
            <p>Our curriculum focuses on nurturing  <br />cognitive, social, emotional, and physical <br /> development, ensuring a well-rounded <br /> education.</p>

              </div>
          </div>


        

        </div>
      </div>

      <div className='text-center p-[150px_0px] '>
        <button className='border p-[10px_20px] rounded-[10px] shadow-[0px_0px_10px_gray]'>Their Happy Words 🤗</button> <br /> <br />
        <h1 className='text-[40px]'>Our Testimonials</h1> <br />
        <p>With a dedicated team of experienced educators, state-of-the-art facilities, and a comprehensive curriculum, <br />
          we aim to lay a strong foundation for your child's future.</p> <br /><br /><br />
        

        
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
          <div className='w-[300px] h-[300px] rounded-2xl text-center border-black shadow-[5px_10px_black] '>
            <img className='w-2xl' style={{width:"50px", height:"50px"  , marginLeft:"120px" }} src={img23} alt="" /> 
            <h2 className='text-2xl'>Jennifer B</h2> 
            <h2>⭐⭐⭐⭐⭐⭐⭐</h2> <br />
            <p className='text-[15px]'>Little Learners Academy has been a <br />
             second home for my child. The <br />
             caring staff and engaging programs <br />
              have made her excited to go to <br />
               school every day!</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-[300px] h-[300px] rounded-2xl text-center border-black shadow-[5px_10px_black] '>
            <img className='w-2xl' style={{width:"50px", height:"50px"  , marginLeft:"120px" }} src={img23} alt="" /> 
            <h2 className='text-2xl'>Jennifer B</h2> 
            <h2>⭐⭐⭐⭐⭐⭐⭐</h2> <br />
            <p className='text-[15px]'>Little Learners Academy has been a <br />
             second home for my child. The <br />
             caring staff and engaging programs <br />
              have made her excited to go to <br />
               school every day!</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-[300px] h-[300px] rounded-2xl text-center border-black shadow-[5px_10px_black] '>
            <img className='w-2xl' style={{width:"50px", height:"50px"  , marginLeft:"120px" }} src={img23} alt="" /> 
            <h2 className='text-2xl'>Jennifer B</h2> 
            <h2>⭐⭐⭐⭐⭐⭐⭐</h2> <br />
            <p className='text-[15px]'>Little Learners Academy has been a <br />
             second home for my child. The <br />
             caring staff and engaging programs <br />
              have made her excited to go to <br />
               school every day!</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-[300px] h-[300px] rounded-2xl text-center border-black shadow-[5px_10px_black] '>
            <img className='w-2xl' style={{width:"50px", height:"50px"  , marginLeft:"120px" }} src={img23} alt="" /> 
            <h2 className='text-2xl'>Jennifer B</h2> 
            <h2>⭐⭐⭐⭐⭐⭐⭐</h2> <br />
            <p className='text-[15px]'>Little Learners Academy has been a <br />
             second home for my child. The <br />
             caring staff and engaging programs <br />
              have made her excited to go to <br />
               school every day!</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-[300px] h-[300px] rounded-2xl text-center border-black shadow-[5px_10px_black] '>
            <img className='w-2xl' style={{width:"50px", height:"50px"  , marginLeft:"120px" }} src={img23} alt="" /> 
            <h2 className='text-2xl'>Jennifer B</h2> 
            <h2>⭐⭐⭐⭐⭐⭐⭐</h2> <br />
            <p className='text-[15px]'>Little Learners Academy has been a <br />
             second home for my child. The <br />
             caring staff and engaging programs <br />
              have made her excited to go to <br />
               school every day!</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-[300px] h-[300px] rounded-2xl text-center border-black shadow-[5px_10px_black] '>
            <img className='w-2xl' style={{width:"50px", height:"50px"  , marginLeft:"120px" }} src={img23} alt="" /> 
            <h2 className='text-2xl'>Jennifer B</h2> 
            <h2>⭐⭐⭐⭐⭐⭐⭐</h2> <br />
            <p className='text-[15px]'>Little Learners Academy has been a <br />
             second home for my child. The <br />
             caring staff and engaging programs <br />
              have made her excited to go to <br />
               school every day!</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-[300px] h-[300px] rounded-2xl text-center border-black shadow-[5px_10px_black] '>
            <img className='w-2xl' style={{width:"50px", height:"50px"  , marginLeft:"120px" }} src={img23} alt="" /> 
            <h2 className='text-2xl'>Jennifer B</h2> 
            <h2>⭐⭐⭐⭐⭐⭐⭐</h2> <br />
            <p className='text-[15px]'>Little Learners Academy has been a <br />
             second home for my child. The <br />
             caring staff and engaging programs <br />
              have made her excited to go to <br />
               school every day!</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-[300px] h-[300px] rounded-2xl text-center border-black shadow-[5px_10px_black] '>
            <img className='w-2xl' style={{width:"50px", height:"50px"  , marginLeft:"120px" }} src={img23} alt="" /> 
            <h2 className='text-2xl'>Jennifer B</h2> 
            <h2>⭐⭐⭐⭐⭐⭐⭐</h2> <br />
            <p className='text-[15px]'>Little Learners Academy has been a <br />
             second home for my child. The <br />
             caring staff and engaging programs <br />
              have made her excited to go to <br />
               school every day!</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-[300px] h-[300px] rounded-2xl text-center border-black shadow-[5px_10px_black] '>
            <img className='w-2xl' style={{width:"50px", height:"50px"  , marginLeft:"120px" }} src={img23} alt="" /> 
            <h2 className='text-2xl'>Jennifer B</h2> 
            <h2>⭐⭐⭐⭐⭐⭐⭐</h2> <br />
            <p className='text-[15px]'>Little Learners Academy has been a <br />
             second home for my child. The <br />
             caring staff and engaging programs <br />
              have made her excited to go to <br />
               school every day!</p>
          </div>
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
      </div>

      <div className='text-center p-[150px_0px] '>
        <button className='border p-[10px_20px] rounded-[10px] shadow-[0px_0px_10px_gray]'>Solutions For The Doubts</button> <br /> <br />
        <h1 className='text-[40px]'>Frequently Asked Questions</h1> <br />
        <p>Find all the essential information you need in our FAQ section, designed to address the most frequently asked <br />
          questions and help you make informed decisions for your child's education.</p> <br /><br /><br />
        
        <img className='w-[1000px] m-auto' src={img5} alt="" />
      </div>

      <div  className='text-center p-[150px_0px] '>
        <button className='border p-[10px_20px] rounded-[10px] shadow-[0px_0px_10px_gray]'>Explore More</button> <br /> <br />
        <h1 className='text-[40px]'>Navigate through our Pages</h1> <br />
        <p>Your gateway to discovering a wealth of valuable information about our kindergarten school, Feel free to explore <br />
          and learn more about the enriching experiences that await your child at our kindergarten school.</p> <br /><br /><br />
        
        <div className='  flex justify-center items-center gap-[40px] flex-wrap '>

          <div className='w-[550px] shadow-[5px_10px_black] border h-[450px] rounded-[20px] p-[30px] '>
            <h1 className='text-[40px]'>About Us </h1> <br />
            <img src={img6} alt="" /> <br></br><br />
            <p className='text-[15px]'>Discover our Mission, Values, and our unwavering commitment to  <br />
              providing the best learning experience for your child. Learn about our  <br />
              passionate educators and our engaging approach to early education.❔</p> <br /><br /><br />
            <button className='w-[100%] border p-[10px_20px] rounded-[10px] shadow-[5px_10px_black] bg-[#FFDECC] '> Learn More  ➡️</button>
          </div>

          <div className='w-[550px] shadow-[5px_10px_black] border h-[450px] rounded-[20px] p-[30px] '>
            <h1 className='text-[40px]'>Academics</h1> <br />
            <img src={img6} alt="" /> <br></br><br />
            <p className='text-[15px]'>Delve into our comprehensive academic programs designed to <br />
              stimulate young minds, foster creativity, and encourage a love for <br />
              learning. Explore our well-rounded curriculum that nurtures both  <br />
              intellectual and social development.</p> <br /><br />
            <button className='w-[100%] border p-[10px_20px] rounded-[10px] shadow-[5px_10px_black] bg-[#FFDECC] '> Learn More  ➡️</button>
          </div>

          <div className='w-[550px] shadow-[5px_10px_black] border h-[450px] rounded-[20px] p-[30px] '>
            <h1 className='text-[40px]'>Student Life</h1> <br />
            <img src={img6} alt="" /> <br></br><br />
            <p className='text-[15px]'>Delve into our comprehensive academic programs designed to <br />
              stimulate young minds, foster creativity, and encourage a love for <br />
              learning. Explore our well-rounded curriculum that nurtures both  <br />
              intellectual and social development.</p> <br /><br />
            <button className='w-[100%] border p-[10px_20px] rounded-[10px] shadow-[5px_10px_black] bg-[#FFDECC] '> Learn More  ➡️</button>
          </div>

          <div className='w-[550px] shadow-[5px_10px_black] border h-[450px] rounded-[20px] p-[30px] '>
            <h1 className='text-[40px]'>Admissions</h1> <br />
            <img src={img6} alt="" /> <br></br><br />
            <p className='text-[15px]'>Delve into our comprehensive academic programs designed to <br />
              stimulate young minds, foster creativity, and encourage a love for <br />
              learning. Explore our well-rounded curriculum that nurtures both  <br />
              intellectual and social development.</p> <br /><br />
            <button className='w-[100%] border p-[10px_20px] rounded-[10px] shadow-[5px_10px_black] bg-[#FFDECC] '> Learn More  ➡️</button>
          </div>
          

        </div>
      </div>


     
    </>
  );
}

export default Home;
