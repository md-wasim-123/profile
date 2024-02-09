
import React, { useEffect, useState } from 'react';

import axios from 'axios';
import './App.css';

function App() {
  const [data, setData] = useState("");
  console.log(data)

  const app = () => axios.get("https://randomuser.me/api/?page=1&results=1&seed=abc")
    .then((res) => {
      setData(res.data.results)
    })
    .catch((err) => {
      console.log(err)
    })
  useEffect(() => {
    app()
  }, [])

  return (
    <div className=' bg-color w-full h-auto md:h-screen'>
      <div className='w-full mx-auto flex items-center justify-center py-10 gap-5'>
        <span className='text-4xl bg-line text-white font-semibold '>User</span>
        <lottie-player src="https://lottie.host/0731538e-5d21-40dc-a8ed-2379a6d790f8/ecW3b5T1vx.json" background="##FFFFFF" speed="1" style={{ width: "100px", height: "100px" }} loop autoplay direction="1" mode="normal">
        </lottie-player>
        <span className='text-4xl bg-line text-white font-semibold'>Profile</span>
      </div>


      <div className='flex justify-evenly flex-col md:flex-row w-80 md:w-3/6 mx-auto h-auto bg-bor '>
        
        <div className='w-[100%] md:w-[50%] h-full p-2'>
            <img className='w-full h-full object-cover rounded' src={data[0]?.picture?.large} alt="" />
        </div>

        <div className='w-[100%] md:w-[50%] p-5 text-white text-xl'>
          <div className='flex items-center gap-5 py-5'>
            <span className='text-slate-400 font-extrabold'>Name :</span>
            <p className='block'>  {data[0]?.name?.first}</p>
            <p className='block'>{data[0]?.name?.last}</p>
          </div>
          <div className='py-5'>
            <p><span className='me-3 text-slate-400 font-extrabold'>Gender:</span>{data[0]?.gender}</p>
          </div>
          <div className='py-5'>
            <p><span className='me-3 text-slate-400 font-extrabold'>Phone:</span> {data[0]?.phone}</p>
          </div>
        </div>


      </div>
    </div>
  );
}

export default App;
