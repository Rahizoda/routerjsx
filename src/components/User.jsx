import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BorderColorIcon from '@mui/icons-material/BorderColor';

const User = ({img12}) => {
     let api = "https://68500abee7c42cfd17971bfc.mockapi.io/data/data"

  const [ data , setData] = useState({})
    const { id } = useParams()
    const [ triger , setTriger] = useState(false)
    async function GetData() {
        try {
            const { data } = await axios.get(`${api}/${id}`)
            setData(data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (triger) {
            GetData()
        }
        return setTriger(true)
    }, [triger])
  
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

    <div className='text-center p-[50px_0px] '>
      <h1 className='text-4xl font-bold'>Name: {data.name} </h1> <br />
      <h2 className='text-3xl font-bold'> Age: {data.age} </h2> <br />
      <img className='w-[400px] m-auto rounded-2xl border border-black  ' src={data.image} alt="" /> <br />
      <p>
        <span className='font-bold'>Description: </span> {data.info}
        With a strong background in elementary education, Mr. David brings a creative and interactive teaching style to his classroom. His enthusiasm for learning inspires students to ask questions and think critically.
      </p> <br /><br />
      
    </div>
    </>
  );
}

export default User;
