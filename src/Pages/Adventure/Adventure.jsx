import React from 'react';
import img1 from '../Home/image/Group 167.png'

const Adventure = () => {
    return (
        <div className='mt-[210px] grid md:grid-cols-2 gap-[220px]'>
            {/* profile */}
   <div className='bg-sky-50 border-none'>

<div className='flex justify-center bg-white shadow'>

<div className="avatar">
  <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src={img1} />
  </div>
</div>
<div className='mx-[10px]'>
<h3 className='font-bold'>Jenny Wilson</h3>
    <p className='mt-[3px]'>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing...</p>
</div>
</div>

<div className='flex justify-center mt-[50px] bg-white shadow'>

<div className="avatar">
  <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src={img1} />
  </div>
</div>
<div className='mx-[10px]'>
<h3 className='font-bold'>Jenny Wilson</h3>
    <p className='mt-[3px]'>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing...</p>
</div>
</div>

<div className='flex justify-center mt-[50px] bg-white shadow'>

<div className="avatar">
  <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src={img1} />
  </div>
</div>
<div className='mx-[10px]'>
<h3 className='font-bold'>Jenny Wilson</h3>
    <p className='mt-[3px]'>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing...</p>
</div>
</div>







   </div>



{/* content */}
<div className='relative'>
  <div className=' rounded-full h-[93px] w-[93px] absolute '></div>
  <div className=''>
    <h1>
      <span className='text-4xl font-bold'>Tropical Adventure</span> <br />
      <span className='text-3xl font-semibold'>for Students.</span>
    </h1>
    <p className='mt-[10px] font-bold'>Student Tropical Vacation: Relax and Recharge</p>
  </div>
  <ul className='mt-4 list-disc ml-5'>
    <li className='mt-2'>Lorem ipsum dolor sit amet</li>
    <li className='mt-2'>Massa quis natoque sit quam</li>
    <li className='mt-2'>Eros non pellentesque elit </li>
    <li className='mt-2'>tortor id euismod habitant</li>
    <li className='mt-2'>Sed suspendisse id in ultrices</li>
  </ul>
  <h1 className='bg-[#F27A44] rounded-full px-4 py-2 md:px-8 md:py-4 btn mt-4 md:mt-8 text-white'>
  Explore More
        </h1>
</div>


        </div>
    );
};

export default Adventure;