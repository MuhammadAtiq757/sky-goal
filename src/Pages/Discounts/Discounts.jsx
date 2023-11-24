import React from 'react';
import img1 from '../Home/image/Mask group.png';

const Discounts = () => {
  return (
    <div className=' md:mt-20 grid md:grid-cols-2 container mx-auto'>
      {/* Content */}
      <div className='mt-36'>
        <div className=''></div>
        <div className=''>
            <p>Get 20% off for student</p>
          <h1>
            <span className='text-2xl md:text-4xl font-bold'>Student discounts available.</span> <br />
            <span className='text-xl md:text-3xl font-semibold'>Get ready for some fun in the sun!</span>
          </h1>
        </div>
        <ul className='mt-2 md:mt-4 list-disc ml-5'>
          <li className='mt-2'>Lorem ipsum dolor sit amet</li>
          <li className='mt-2'>Massa quis natoque sit quam</li>
          <li className='mt-2'>Eros non pellentesque elit </li>
          <li className='mt-2'>tortor id euismod habitant</li>
          <li className='mt-2'>Sed suspendisse id in ultrices</li>
        </ul>
        <h1 className='bg-[#F27A44] rounded-full px-4 py-2 md:px-8 md:py-4 btn mt-2 md:mt-4 text-white'>
          Explore More
        </h1>
      </div>

      {/* Profile */}
      <div className=''>
        <img  src={img1} alt="" className='max-w-full md:max-h-full w-[450px] h-[640px]' />
      </div>
    </div>
  );
};

export default Discounts;
