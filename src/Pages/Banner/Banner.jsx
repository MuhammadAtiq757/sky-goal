import React from 'react';
import banner from '../Home/image/Group 171.png';

const Banner = () => {
  return (
    <div className='grid md:grid-cols-2 gap-4'>
      {/* Content */}
      <div className='md:mt-[240px] md:w-[636px] md:h-[520px] p-4 md:p-0'>
        <p className='font-semibold text-lg mb-2 md:mb-4'>
          Discover the beauty of the tropics
        </p>
        <h1 className='font-bold text-4xl md:text-6xl'>
          Tropical <br /> Destinations <br />{' '}
          <span className='font-semibold'>For Student</span>
        </h1>

        <p className='text-[#505C59] mt-4 md:mt-8'>
          Lorem ipsum dolor sit amet consectetur. Sit mattis donec mi bibendum
          integer <br /> rutrum nisi. A nec nisl vitae{' '}
        </p>
        <h1 className='bg-[#F27A44] rounded-full px-4 py-2 md:px-8 md:py-4 btn mt-4 md:mt-8 text-white'>
          SIGN UP
        </h1>
      </div>

      {/* Image */}
      <div className=' md:block ml-[90px]'>
        <img
          className='max-w-full md:max-h-full w-[450px] h-[640px]'
          src={banner}
          alt='Tropical Destinations'
        />
      </div>
    </div>
  );
};

export default Banner;
