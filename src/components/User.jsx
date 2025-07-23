import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const User = () => {
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
    <div>
          <h1> {data.name} </h1>
          <img src={data.image} alt="" />
    </div>
  );
}

export default User;
