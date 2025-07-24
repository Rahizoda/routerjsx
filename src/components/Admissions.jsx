import React from 'react';

const Admissions = ({img12 , img25 , img26}) => {
  return (
    <>
       <div data-aos="fade-up-right"  className="flex  w-[98%] m-auto border mt-[50px] justify-center items-center gap-[60px] p-[100px_30px] rounded-[20px] shadow-[5px_10px_black] ">
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

       <div  className='text-center mt-[100px] '>
        <button className='border p-[10px_20px] rounded-[10px] shadow-[0px_0px_10px_gray]'>Process</button> <br /> <br />
        <h1 className='text-[40px]'>Admission Process</h1> <br />
        <p>Embark on a remarkable educational journey with us! Our Admission and Enrollment process is the gateway to <br />
          providing your child with an exceptional learning experience at our kindergarten school.</p> <br /><br /><br />
        

        <img data-aos="fade-up-left"  className='w-[1000px] m-auto ' src={img25} alt="" />
      </div>

      <div  className='text-center mt-[100px] '>
        <button className='border p-[10px_20px] rounded-[10px] shadow-[0px_0px_10px_gray]'>Our Features</button> <br /> <br />
        <h1 className='text-[40px]'>Fee Structure</h1> <br />
        <p>Embark on a remarkable educational journey with us! Our Admission and Enrollment process is the gateway to <br />
          providing your child with an exceptional learning experience at our kindergarten school.</p> <br /><br /><br />
        

        <img data-aos="fade-up"
     data-aos-anchor-placement="center-center"  className='w-[1000px] m-auto ' src={img26} alt="" />
      </div>

    </>
  );
}

export default Admissions;
