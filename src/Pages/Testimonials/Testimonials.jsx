import React from 'react';
import img1 from '../Home/image/Group 167.png'

const Testimonials = () => {
    return (
        <div className='mt-[150px]'>
            <h1 className='text-center text-4xl font-semibold mb-20'>Testimonials</h1>

<div className='grid md:grid-cols-3 gap-4'>



<div className='w-[290px] h-[290px] flex flex-col items-center justify-center'>
      <div className="avatar">
        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img className='' src={img1} alt="Avatar" />
        </div>
      </div>
      <p className='text-center text-xl mt-6 border-b-2 border-sky-200 mb-[16px]'>Corey Korsgaard</p>
      
      <p className='text-center mt-4'>It is a long established fact that a reader will be distracted by
         the readable content of a page when looking at its layout.</p>
    </div>
<div className='w-[290px] h-[290px] flex flex-col items-center justify-center'>
      <div className="avatar">
        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img className='' src={img1} alt="Avatar" />
        </div>
      </div>
      <p className='text-center text-xl mt-6 border-b-2 border-sky-200 mb-[16px]'>Jakob Aminoff</p>
      
      <p className='text-center mt-4'>It is a long established fact that a reader will be distracted by
         the readable content of a page when looking at its layout.</p>
    </div>
<div className='w-[290px] h-[290px] flex flex-col items-center justify-center'>
      <div className="avatar">
        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img className='' src={img1} alt="Avatar" />
        </div>
      </div>
      <p className='text-center text-xl mt-6 border-b-2 border-sky-200 mb-[16px]'>Carla Press</p>
      
      <p className='text-center mt-4'>It is a long established fact that a reader will be distracted by
         the readable content of a page when looking at its layout.</p>
    </div>




</div>


        </div>
    );
};

export default Testimonials;