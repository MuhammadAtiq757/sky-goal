import React, { useState } from 'react';
import img1 from '../Home/image/Group 167.png'

const Booking = () => {

  const [starCount, setStarCount] = useState(0);
  const [roomCount, setRoomCount] = useState(0);

  const increaseStarCount = () => {
    setStarCount(starCount + 1);
  };

  const decreaseStarCount = () => {
    if (starCount > 0) {
      setStarCount(starCount - 1);
    }
  };

  const increaseRoomCount = () => {
    setRoomCount(roomCount + 1);
  };

  const decreaseRoomCount = () => {
    if (roomCount > 0) {
      setRoomCount(roomCount - 1);
    }
  }

  return (
    <div>
      <div className=' md:mt-20 grid md:grid-cols-2'>

        <div className=''>
          <img src={img1} alt="" className=' w-[400px] h-[600px]' />

        </div>


        {/* Content */}
        <div className='mt-36  shadow w-[380px] px-8 mr-4'>
          <h1 className='text-4xl font-bold mb-[10px] mt-8'>Book Now</h1>
          <p className='text-lg mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          <div>
            <h1>City</h1>
            <input className='p-4 w-full bg-sky-50' type="text" placeholder='country name ' />
          </div>

          <div className='flex gap-2 mt-6'>
            <div>
              <h1>Arrival</h1>
              <input className='p-4  bg-sky-50 w-[170px]' type="text" placeholder='10 October' />
            </div>
            <div>
              <h1>Departure</h1>
              <input className='p-4 bg-sky-50 w-[170px]' type="text" placeholder='10 October' />
            </div>
          </div>

          <div className='flex gap-2 mt-6'>
            <div className='relative'>
              <h1>Star</h1>
              <div className='relative'>
                <input className='p-4 text-center bg-sky-50 w-[175px]' type="text" placeholder='10 October' value={starCount} readOnly />
                <button className='absolute p-2 font-bold text-4xl top-1/2 transform -translate-y-1/2 left-0' onClick={decreaseStarCount}>-</button>
                <button className='absolute p-2 font-bold text-4xl top-1/2 transform -translate-y-1/2 right-0' onClick={increaseStarCount}>+</button>
              </div>
            </div>
            <div className='relative'>
              <h1>Room</h1>
              <div className='relative'>
                <input className='p-4 text-center bg-sky-50 w-[175px]' type="text" placeholder='10 October' value={roomCount} readOnly />
                <button className='absolute w-4 font-bold text-4xl p-2 top-1/2 transform -translate-y-1/2 left-0' onClick={decreaseRoomCount}>-</button>
                <button className='absolute text-4xl p-2 font-bold top-1/2 transform -translate-y-1/2 right-0' onClick={increaseRoomCount}>+</button>
              </div>
            </div>
          </div>

        </div>


      </div>
    </div>
  );
};

export default Booking;